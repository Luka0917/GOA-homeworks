const express = require('express');
const app = express();
const PORT = 1717;

let todos = ['eat breakfast', 'go to work', 'suffer', 'go home'];

app.get('/random', (req, res) => {
    const random = todos[Math.floor(Math.random() * todos.length)];
    res.json({ randomTodo: random });
})

app.get('/todos', (req, res) => {
    res.json({ todos: todos.join(', ') });
})

app.get('/web', (req, res) => {
    const list = todos.map(el => `<li>${el}</li>`).join('');
    res.json(`<ul>${list}</ul>`);
})

app.delete('/todos', (req, res) => {
    const removed = todos.shift();
    res.json({ removedTodo: removed });
})

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));