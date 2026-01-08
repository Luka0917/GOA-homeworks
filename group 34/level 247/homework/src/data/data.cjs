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
const cart = [];
const orders = [];

module.exports = { products, cart, orders }