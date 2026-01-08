const fs = require('node:fs');
const path = require('node:path');

const DB_PATH = path.resolve('db/db.json');
const readDB = async () => {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
}

const writeDB = async (newData) => {
    await fs.writeFile(DB_PATH, JSON.stringify(newData, null, 2));
}

const get = async (key) => {
    const data = await readDB();
    return data[key]
}

const addItem = async (key, value) => {
    let data = await readDB();
    data[key].push(value);
    await writeDB(data);
    return value;
}

const findById = async (key, id) => {
    const data = await readDB();
    return data[key].find(el => el.id === id);
}

const removeById = async (key, id) => {
    const data = await readDB();
    data[key] = data[key].filter(el => el.id !== id);
    await writeDB(data);
}

// addItem, getAll, remove, findById