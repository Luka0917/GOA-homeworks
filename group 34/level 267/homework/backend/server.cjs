const express = require('express');
const cors = require('cors');
const db = require('./db.cjs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 1717;

app.post('/sales', (req, res) => {
    const { product_name, category, price, quantity } = req.body;

    if(!product_name || !category || price === null || quantity === null){
        return res.status(400).json({ message: 'fill all fields' });
    }

    const stmt = db.prepare(`
        INSERT INTO sales (product_name, category, price, quantity)
        VALUES (?, ?, ?, ?)
    `);
    stmt.run(product_name, category, price, quantity);
    res.status(201).json({ message: 'Sale added successfully' });
});

app.get('/sales', (req, res) => {
    const result = db.prepare(`SELECT * FROM sales`).all();
    res.json(result);
});

app.get('/analytics/full', (req, res) => {
    const categoryStats = db.prepare(`
        SELECT 
            category, 
            COUNT(*) as total_sales, 
            SUM(price * quantity) as total_revenue,
            AVG(price) as avg_price,
            MIN(price) as min_price,
            MAX(price) as max_price
        FROM sales
        GROUP BY category
    `).all();

    const totalRevenue = db.prepare(`
        SELECT SUM(price * quantity) as total_revenue FROM sales
    `).get().total_revenue

    res.json({ categoryStats, totalRevenue });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));