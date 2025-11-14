const http = require('node:http');
const PORT = 1717;


const server = http.createServer((req, res) => {
    console.log(`Hello, ${req.method}`);
});
server.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));


// let count = 0;
// const server = http.createServer((req, res) => {
//     count++;
//     console.log(`Count: ${count}`);
// });
// server.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));


// const server = http.createServer((req, res) => {
//     const date = new Date();
//     const time = date.toLocaleTimeString();
//     const responsArr = [`Method: ${req.method}, Time: ${time}`];
//     res.statusCode = 200;
//     res.end(JSON.stringify(responsArr));
//     console.log(JSON.stringify(responsArr));
// })
// server.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));


// let history = [];
// const server = http.createServer((req, res) => {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     res.statusCode = 200;
//     history.push(`${req.method}: ${year}.${month}.${day} - ${res.statusCode}`);
//     res.end(JSON.stringify(history));
//     console.log(JSON.stringify(history));
// });
// server.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));