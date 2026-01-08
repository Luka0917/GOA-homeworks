const express = require('express');
const cartRouter = express.Router();

const { cart } = require('../data/data.cjs');

cartRouter.get('/cart', (req, res) => {
    res.json({ data: cart, success: true })
})

cartRouter.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });

    const item = cart.find(el => el.product.id == id);
    if(!item) return res.status(404).json({ message: 'Item not Found!', success: false });

    res.status(200).json({ data: item, success: true })
})

cartRouter.post('/cart', (req, res) => {
    const { newProduct, count } = req.body;
    if(!newProduct || !count) return res.status(400).json({ message: 'Invalid Input!', success: false });

    cart.push(newProduct)
    res.status(201).json({ data: newProduct, success: true })
})

cartRouter.delete('/cart', (req, res) => {
    if(cart.length === 0) return res.status(400).json({ message: 'Cart is already empty!', success: false });

    const deleted = [...cart];
    cart.length = 0;
    res.json({ data: deleted, success: true });
})

cartRouter.delete('/cart/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });

    const deletedItem = cart.find(el => el.product.id === id);
    if(!deletedItem) return res.status(404).json({ message: 'Item not Found!', success: false });

    const remaining = cart.filter(el => el.product.id !== id);
    cart.length = 0;
    cart.push(...remaining);
    res.json({ deletedItem, remaining, success: true });
})