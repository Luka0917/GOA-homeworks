const fs = require('node:fs');
const Database = require('better-sqlite3');

const db = new Database('app.db');
db.pragma('foreign_keys = ON');

const sql = fs.readFileSync('./group 34/level 263/homework/migrations/001_init.sql', 'utf8');
db.exec(sql);

console.log('Migration applied successfully!');