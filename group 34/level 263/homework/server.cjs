const express = require('express');
const Database = require('better-sqlite3');

const PORT = 1717;
const app = express();
app.use(express.json());
const db = new Database('app.db');
db.pragma('foreign_keys = ON');

app.post('/authors', (req, res) => {
    const { name, birth_year, country } = req.body;

    try{
        const stmt = db.prepare(`
            INSERT INTO Authors (name, birth_year, country) VALUES (?, ?, ?)    
        `);
        const result = stmt.run(name, birth_year, country);
        res.json({ id: result.lastInsertRowid, name, birth_year, country });
    }catch(err){
        res.status(400).json({ error: err.message })
    }
});

app.get('/authors', (req, res) => {
    const authors = db.prepare(`SELECT * FROM Authors`).all();
    res.json(authors);
});


app.post('/books', (req, res) => {
    const { title, author_id, publish_year, genre } = req.body;

    try{
        const stmt = db.prepare(`
            INSERT INTO Books (title, author_id, publish_year, genre) VALUES(?, ?, ?, ?)
        `);
        const result = stmt.run(title, author_id, publish_year, genre);
        res.json({ id: result.lastInsertRowid, title, author_id, publish_year, genre });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

app.get('/books', (req, res) => {
    const books = db.prepare(`
        SELECT 
            Books.id, 
            Books.title, 
            Books.publish_year, 
            Books.genre, 
            Authors.name AS author 
        FROM Books 
        JOIN Author ON Books.author_id = Authors.id
    `).all();
    res.json(books);
});


app.post('/members', (req, res) => {
    const { first_name, last_name } = req.body;

    try{
        const stmt = db.prepare(`
            INSERT INTO Members (first_name, last_name) VALUES (?, ?) 
        `);
        const result = stmt.run(first_name, last_name);
        res.json({ id: result.lastInsertRowid, first_name, last_name });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

app.get('/members', (req, res) => {
    const members = db.prepare(`SELECT * FROM Members`).all();
    res.json(members);
});


app.post('/loans', (req, res) => {
    const { book_id, member_id, return_date } = req.body;

    try{
        const loanExists = db.prepare(`
            SELECT * FROM Loans WHERE book_id = ? AND return_date IS NULL
        `).get(book_id);
        if(loanExists) return res.status(400).json({ error: 'Book is already loaned!' });

        const stmt = db.prepare(`
            INSERT INTO Loans (book_id, member_id, return_date) VALUES (?, ?, ?)    
        `);
        const result = stmt.run(book_id, member_id, return_date);
        res.json({ id: result.lastInsertRowid, book_id, member_id, return_date })
    }catch(err){
        res.status(400).json({ error: err.message });
    }
});

app.get('/loans', (req, res) => {
    const loans = db.prepare(`
        SELECT 
            Loans.id, 
            Books.title AS book, 
            Members.first_name || ' ' || Members.last_name AS member, 
            Loans.loan_date, 
            Loans.return_date
        FROM Loans
        JOIN Books ON Loans.book_id = Books.id
        JOIN Members ON Loans.member_id = Members.id
    `).all();
    res.json(loans);
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));