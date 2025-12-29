const express = require('express');
const orderRouter = express.Router();

const { orders } = require('../data/data.cjs');

orderRouter.get('/order', (req, res) => {
    res.json({ data: orders, success: true });
})

orderRouter.get('/order/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Ivalid ID!', success: false });

    const item = orders.find(el => el.id == id);
    if(!item) return res.status(404).json({ message: 'Item not Found!', success: false });

    res.json({ data: item, success: true });
})