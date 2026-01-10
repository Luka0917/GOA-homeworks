const fs = require('node:fs').promises;
const path = require('node:path');

const DB_PATH = path.resolve('./group 34/level 251/homework/task 02/db/db.json');

const readDb = async () => {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
}

const writeDb = async (newData) => await fs.writeFile(DB_PATH, JSON.stringify(newData, null, 2));

const get = async (index) => {
    const data = await readDb();
    return data.todos[index];
}

const addTodo = async (value) => {
    const data = await readDb();
    data.todos.push(value);
    await writeDb(data);
}

const removeTodo = async (index) => {
    const data = await readDb();

    if(!data.todos || index < 0 || index >= data.todos.length) return null;

    const removed = data.todos.splice(index, 1)[0];
    await writeDb(data);
    return removed;
}

module.exports = {
    readDb,
    writeDb,
    get,
    addTodo,
    removeTodo
}