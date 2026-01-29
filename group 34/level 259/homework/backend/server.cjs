const express = require('express');
const cors = require('cors');

const DataBase = require('better-sqlite3');
const db = new DataBase('app.db');

const app = express();

const PORT = 1717;
app.use(cors());
app.use(express.json());

db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        note TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

app.post('/note', (req, res) => {
    const { title, note } = req.body;

    if(!title || !note) return res.status(400).json({ error: 'Title and Note are Required!' });

    if(title.length > 100) return res.status(400).json({ error: 'Title is too long (100 Character Max)!' });
    if(note.length > 500) return res.status(400).json({ error: 'Note is too long (100 Character Max)!' });

    try{
        const stmt = db.prepare('INSERT INTO notes (title, note) VALUES (?, ?)');
        const info = stmt.run(title, note);
        res.status(201).json({ id: info.lastInsertRowid, title, note });
    }catch(err){
        console.log(`DB Error: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/note', (req, res) => {
    try{
        const rows = db.prepare('SELECT * FROM notes ORDER BY created_at DESC').all();
        res.json(rows);
    }catch(err){
        console.log(`DB Error: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/note/:id', (req, res) => {
    const { id } = req.params;

    try{
        const note = db.prepare('SELECT * FROM notes WHERE id = ?').get(id);
        if(!note) return res.status(404).json({ error: 'Note not Found!' });
        res.json(note);
    }catch(err){
        console.log(`DB Error: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/note/:id', (req, res) => {
    const { id } = req.params;

    try{
        const info = db.prepare('DELETE FROM notes WHERE id = ?').run(id);
        if(info.changes === 0) return res.status(404).json({ error: 'Note not Found!' });
        res.json({ message: 'Note Deleted Successfully!' });
    }catch(err){
        console.log(`DB Error: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.delete('/note', (req, res) => {
    try{
        db.prepare('DELETE FROM notes').run();
        res.json({ message: 'All Notes Deleted Successfully!' });
    }catch(err){
        console.log(`DB Error: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));