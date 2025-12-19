const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

//? cart, products, orders

// app.get('/products')

//* path - /products
//^ GET - / , /:id , 

//* path - /cart
//^ GET - / , /:id
//^ POST - /
//^ DELETE - / , /:id

//* path - /orders
//^ GET - /:id , /

//& { id, name, category, price, rate }

const products = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 29.99, rate: 4.3 },
  { id: 2, name: "Mechanical Keyboard", category: "electronics", price: 89.99, rate: 4.7 },
  { id: 3, name: "Running Shoes", category: "fashion", price: 59.99, rate: 4.2 },
  { id: 4, name: "Cotton T-Shirt", category: "fashion", price: 14.99, rate: 4.0 },
  { id: 5, name: "Coffee Maker", category: "home", price: 74.99, rate: 4.5 },
  { id: 6, name: "Blender", category: "home", price: 49.99, rate: 4.1 },
  { id: 7, name: "Notebook", category: "stationery", price: 3.99, rate: 3.9 },
  { id: 8, name: "Ballpoint Pen Set", category: "stationery", price: 6.49, rate: 4.4 },
  { id: 9, name: "Protein Powder", category: "fitness", price: 34.99, rate: 4.6 },
  { id: 10, name: "Yoga Mat", category: "fitness", price: 19.99, rate: 4.2 }
];

const cart = []
//& cart = [ { product: {...product}, count: 1 } ]

const orders = []
//& const order = [ { orderDate: '10-2', item: cart, id: 2 } ]

app.get('/products/', (req, res) => {
    res.json({ data: products, success: true })
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    if(isNaN(id)) return res.status(400).json({ message: 'Ivalid ID!', success: false });

    const product = products.find(el => el.id == id);
    if(!product) return res.status(404).json({ message: 'Product not Found!', success: false });

    res.json({data: product, success: true})
})

app.get('/cart', (req, res) => {
    res.json({ data: cart, success: true })
})

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if(isNaN(id)) return res.status(400).json({ message: 'Ivalid ID!', success: false });

    const item = cart.find( el => el.product.id == id);
    if(!item) return res.status(404).json({ message: 'Item not Found!', success: false });

    res.status(200).json({ data: item, success: true })
})

app.post('/cart', (req, res) => {
    const { newProduct, count } = req.body;
    if(!newProduct || !count) return res.status(400).json({ message: 'Ivalid Input!', success: false });

    cart.push(newProduct)
    res.status(201).json({ data: newProduct, success: true })
})

app.delete('/cart', (req, res) => {
    if(cart.length === 0) return res.status(400).json({ message: 'Cart is already empty!', success: false });

    const deleted = [...cart];
    cart.length = 0;
    res.json({ data: deleted, success: true });
})

app.delete('/cart/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Ivalid ID!', success: false });

    const deletedItem = cart.find(el => el.product.id === id);
    if(!deletedItem) return res.status(404).json({ message: 'Item not Found!', success: false });

    const remaining = cart.filter(el => el.product.id !== id);
    cart.length = 0;
    cart.push(...remaining);
    res.json({ deletedItem, remaining, success: true });
})

app.get('/order', (req, res) => {
    res.json({ data: orders, success: true });
})

app.get('/order/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Ivalid ID!', success: false });

    const item = orders.find(el => el.id == id);
    if(!item) return res.status(404).json({ message: 'Item not Found!', success: false });

    res.json({ data: item, success: true });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))