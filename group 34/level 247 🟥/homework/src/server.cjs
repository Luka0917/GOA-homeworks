const express = require('express');
const app = express();
const PORT = 1717;

const productRouter = require('./routes/productRouter.cjs');
const cartRouter = require('./routes/cartRouter.cjs');
const orderRouter = require('./routes/orderRouter.cjs');

app.use(express.json());

app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/orderRouter', orderRouter);


app.listen(PORT, () => console.log(`The server is running on port: ${PORT}!`));