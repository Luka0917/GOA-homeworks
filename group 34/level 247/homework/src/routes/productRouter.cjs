const express = require('express');
const productRouter = express.Router();

const { products } = require('../data/data.cjs');

productRouter.get('/', (req, res) => {
    res.json({ data: products, success: true });
});

productRouter.get('/:id', (req, res) => {
    const id = req.params.id
    if(isNaN(id)) return res.status(400).json({ message: 'Ivalid ID!', success: false });

    const product = products.find(el => el.id == id);
    if(!product) return res.status(404).json({ message: 'Product not Found!', success: false });

    res.json({data: product, success: true})
})

module.exports = productRouter;