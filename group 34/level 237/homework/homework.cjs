const express = require('express');
const app = express();
const PORT = 3000;

let reqCount = 0;

app.get('/', (req, res) => {
    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Request Timeout!'}));
    })
    reqCount++;
    res.setHeader("X-Powered-By", "Node.js Homework");
    res.send(JSON.stringify({message: "Welcome to Mini API Server!", requests: reqCount}));
})

app.get('/time', (req, res) => {
    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Request Timeout!'}));
    })
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    reqCount++;
    res.setHeader("X-Powered-By", "Node.js Homework");
    res.send(JSON.stringify({time: `${hours}:${minutes}`, requests: reqCount}));
})

app.post('/echo', (req, res) => {
    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Request Timeout!'}));
    })
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        reqCount++;
        res.setHeader("X-Powered-By", "Node.js Homework");
        res.send(JSON.stringify({echo: JSON.parse(body), requests: reqCount}))
    });
})

app.get('/square', (req, res) => {
    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Request Timeout!'}));
    })
    const number = parseInt(req.query.number);
    if(isNaN(number)){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({message: "Error! Please enter valid number!"}));
    }else{
        reqCount++;
        res.setHeader("X-Powered-By", "Node.js Homework");
        res.send(JSON.stringify({input: number, square: number * number, requests: reqCount}));
    }
})

app.post('/sum', (req, res) => {
    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Request Timeout!'}));
    })
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        try{
            const numbers = JSON.parse(body);
            let result = 0;
            numbers.forEach(i => result += i);
            reqCount++;
            res.setHeader("X-Powered-By", "Node.js Homework");
            res.send(JSON.stringify({numbers, sum: result, requests: reqCount}));
        }catch{
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({message: "Error! wrong input!"}));
        }
    });
})

app.get('/info', (req, res) => {
    res.setTimeout(5000, () => {
        res.statusCode = 408;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Request Timeout!'}));
    })
    res.send(JSON.stringify({serverAddress: req.host, httpVersion: req.httpVersion}));
})

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));