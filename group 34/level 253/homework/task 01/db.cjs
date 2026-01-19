const DataBase = require('better-sqlite3');
const db = new DataBase('app.db');
db.pragma('foreign_keys = ON');

db.exec(`
    CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userName TEXT NOT NULL,
        followers INTEGER DEFAULT 0
    );
    
    CREATE TABLE IF NOT EXISTS posts(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        post TEXT NOT NULL,
        likes INTEGER DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS comments(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        post_id INTEGER NOT NULL,
        userName TEXT NOT NULL,
        comment TEXT NOT NULL,
        likes INTEGER DEFAULT 0,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
    );    
`)

const insertUser = db.prepare(`
    INSERT INTO users (userName, followers)
    VALUES (?, ?)    
`)
const user = insertUser.run('Luka123', 0);

const insertPost = db.prepare(`
    INSERT INTO posts (user_id, title, post, likes)
    VALUES (?, ?, ?, ?)
`)
const post = insertPost.run(
    user.lastInsertRowid,
    'Penguins',
    'I Love Penguins!',
    2
)

const insertComment = db.prepare(`
    INSERT INTO comments (post_id, userName, comment, likes)
    VALUES (?, ?, ?, ?)
`)
const comment = insertComment.run(
    post.lastInsertRowid,
    'gela777',
    'I love Penguins too!',
    10
)

console.log("Data inserted successfully!");


//^ ".run()" returns:
//& {
//&   changes: 1, >>> how many rows were affected
//&   lastInsertRowid: 1 >>> ID of the inserted row
//& }