const Database = require('better-sqlite3');
const db = new Database('../db/db.sqlite');

db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');
db.pragma('cache_size = 10000');
db.pragma('foreign_keys = ON');
db.pragma('mmap_size = 134217728');

db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        salt TEXT NOT NULL
    ) STRICT
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS session (
        token TEXT PRIMARY KEY,
        expires_at INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) STRICT
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS todo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title TEXT,
        description TEXT,
        completed INTEGER DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    ) STRICT
`).run();

module.exports = db;