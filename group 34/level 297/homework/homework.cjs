const express = require('express');
const app = express();
const fs = require('node:fs');
const path = require('node:path');
const Database = require('better-sqlite3');
const db = new Database(path.join(__dirname, '..', 'homework', 'app.db'));
const PORT = 1717;

app.use(express.json());

//^ GET /customers/orders -> get customers with their orders
//^ GET /products/revenue -> get total revenue per product, sorted by best selling

//^ POST /customers       -> add customer
//^ POST /products        -> add product
//^ POST /orders/:user_id -> place order

db.pragma('foreign_keys = ON');
db.exec(`
    CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price INTEGER NOT NULL CHECK(price > 0),
        stock INTEGER NOT NULL DEFAULT 0,
        category TEXT NOT NULL
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        total_price INTEGER,
        status TEXT DEFAULT 'pending',
        created_at DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES customers(id)
    );
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS order_items (
        order_id INTEGER,
        product_id INTEGER,
        quantity INTEGER,
        price INTEGER,
        PRIMARY KEY(order_id, product_id),
        FOREIGN KEY(order_id) REFERENCES orders(id),
        FOREIGN KEY(product_id) REFERENCES products(id)
    );
`);

db.exec(`CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON order_items(product_id)`);
db.exec(`CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email)`);

app.post('/customers', (req, res) => {
    try{
        const { first_name, last_name, email } = req.body;
        if(!first_name || !last_name || !email) return res.status(400).json({ message: 'first/last name and email are required!' });
        db.prepare(`INSERT INTO customers (first_name, last_name, email) VALUES(?, ?, ?)`).run(first_name, last_name, email);
        res.status(201).json({ message: 'Customer added!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });
    }
});

app.post('/products', (req, res) => {
    try{
        const { name, price, stock, category } = req.body;
        if(!name || !price || !stock || !category) return res.status(400).json({ message: 'All fields are required!' });
        db.prepare(`INSERT INTO products (name, price, stock, category) VALUES(?, ?, ?, ?)`).run(name, price, stock, category);
        res.status(201).json({ message: 'product added!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });
    }
});

app.post('/orders/:user_id', (req, res) => {
    try{
        const { user_id } = req.params;
        const { product_id, quantity } = req.body;

        if(!user_id || !product_id || !quantity) return res.status(400).json({ message: 'All fields are required!' });

        const placeOrder = db.transaction(() => {
            const product = db.prepare(`SELECT * FROM products WHERE id = ?`).get(product_id);
            if(!product) throw new Error('Product not found!');
            if(product.stock < quantity) throw new Error('Not enough stock!');

            const order = db.prepare(`INSERT INTO orders (user_id, total_price) VALUES(?, ?)`).run(user_id, product.price * quantity);
            db.prepare(`INSERT INTO order_items (order_id, product_id, quantity, price) VALUES(?, ?, ?, ?)`).run(order.lastInsertRowid, product_id, quantity, product.price);
            db.prepare(`UPDATE products SET stock = stock - ? WHERE id = ?`).run(quantity, product_id);
        });

        placeOrder();
        res.status(201).json({ message: 'Order placed!' });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Server error!' });
    }
});

app.get('/customers/orders', (req, res) => {
    const result = db.prepare(`
        SELECT customers.first_name, customers.last_name, orders.id AS order_id, orders.total_price, orders.status
        FROM customers
        JOIN orders ON customers.id = orders.user_id
    `).all();
    res.json(result);
});

app.get('/products/revenue', (req, res) => {
    const result = db.prepare(`
        SELECT products.name, SUM(order_items.quantity * order_items.price) AS total_revenue, SUM(order_items.quantity) AS total_sold
        FROM products
        JOIN order_items ON products.id = order_items.product_id
        GROUP BY products.id
        ORDER BY total_sold DESC
    `).all();
    res.json(result);
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));