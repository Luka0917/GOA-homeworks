const express = require('express');
const app = express();
const PORT = 1717;

const { readDb, addTodo, removeTodo } = require('./storage/store.cjs');

app.use(express.json());

app.get('/random', async (req, res) => {
    const data = await readDb();
    if(data.todos.length === 0) return res.status(400).json({ message: 'No Todos!', success: false });

    const random = data.todos[Math.floor(Math.random() * data.todos.length)];
    res.json({ data: random, success: true });
})

app.get('/todos', async (req, res) => {
    const data = await readDb();
    res.json(data.todos);
})

app.get('/web', async (req, res) => {
    const data = await readDb();
    const list = data.todos.map(el => `<li>${el}</li>`).join('');
    res.json({ data: `<ul>${list}</ul>`, success: true });
})

app.post('/todos', async (req, res) => {
    const { todo } = req.body;
    if(!todo) return res.status(400).json({ message: 'Enter a Todo!', success: false });

    const newTodo = await addTodo(todo);
    res.status(201).json({ data: todo, success: true });
})

app.delete('/todos/:index', async (req, res) => {
    const index = parseInt(req.params.index);

    const removed = await removeTodo(index);
    if(!removed) return res.status(400).json({ message: 'No Todos To Remove!', success: false });
    res.json({ data: removed, success: true });
})

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));