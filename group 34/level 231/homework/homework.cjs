const http = require('node:http');
const PORT = 1717;

let todos = ['eat breakfast', 'go to work', 'suffer', 'go home'];

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/random'){
        const random = todos[Math.floor(Math.random() * todos.length)];
        res.end(random);
    }
    if(req.method === 'GET' && req.url === '/todos'){
        res.end(todos.join(', '));
    }
    if(req.method === 'GET' && req.url === '/web'){
        const list = todos.map(el => `<li>${el}</li>`).join('');
        res.end(`<ul>${list}</ul>`);
    }
    if(req.method === 'DELETE' && req.url === '/todos'){
        const removed = todos.shift();
        res.end("Removed: " + removed);
    }
});
server.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));