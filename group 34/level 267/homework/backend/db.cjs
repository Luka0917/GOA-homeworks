const Database = require('better-sqlite3');
const path = require('node:path');
const dbPath = path.join(__dirname, 'app.db');
const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS sales (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        quantity INTEGER NOT NULL
    )
`);

module.exports = db;