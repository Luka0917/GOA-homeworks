const CONSTANTS = {
    ONE_DAY_IN_MS: 24 * 60 * 60 * 1000,
    HASH_ITERATIONS: 210000,
    HASH_KEYLEN: 64,
    HASH_DIGSET: 'sha512',
    PORT: 3002
};

const express = require('express');
const crypto = require('node:crypto'); 
const cors = require('cors');
const app = express();
const { promisify } = require('node:util');
const { requireAuth } = require('./auth.cjs');
const cookieParser = require('cookie-parser');

const db = require('./db.cjs');
const { error } = require('node:console');

const pbkdf2Async = promisify(crypto.pbkdf2);

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(cookieParser());

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) return res.status(400).json({ error: 'Username and password is required!' });

    try{
        const salt = crypto.randomBytes(16).toString('hex');

        const hash = await pbkdf2Async(password, salt, CONSTANTS.HASH_ITERATIONS, CONSTANTS.HASH_KEYLEN, CONSTANTS.HASH_DIGSET);

        db.prepare(`INSERT INTO users (username, password, salt) VALUES (?, ?, ?);`).run(username, hash.toString('hex'), salt);

        res.status(201).json({ message: 'User created!' });
    }catch(err){
        if(err.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            res.status(400).json({ error: 'Username already exists' });
        }else{
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) return res.status(400).json({ error: 'Username and password is required!' });

    const user = db.prepare(`SELECT * FROM users WHERE username = ?`).get(username);

    if(!user) return res.status(400).json({ error: 'Invalid password!' });

    const hash = await pbkdf2Async(password, user.salt, CONSTANTS.HASH_ITERATIONS, CONSTANTS.HASH_KEYLEN, CONSTANTS.HASH_DIGSET);

    if(hash.toString('hex') === user.password){
        const token = crypto.randomBytes(31).toString('hex');
        const expiresAt = Date.now() + CONSTANTS.ONE_DAY_IN_MS;

        db.prepare(`INSERT INTO session (user_id, token, expires_at) VALUES (?, ?, ?)`).run(user.id, token, expiresAt);
        
        res.cookie('session_id', token, {
            httpOnly: true,
            maxAge: CONSTANTS.ONE_DAY_IN_MS,
            source: false,
            sameSite: 'lax'
        })

        res.json({ message: 'Login Successful!', user });
    }else{
        res.status(400).json({ error: 'Invalid password!' });
    }
});

app.post('/todos', requireAuth, async (req, res) => {
    const { title, description } = req.body;
    const user_id = req.user.id;

    if(!title || !description) return res.status(400).json({ error: 'we need Title and Description dumbass!' });

    try{
        const stmt = db.prepare(`INSERT INTO todo (user_id, title, description) VALUES (?, ?, ?)`)
        stmt.run(user_id, title, description);
    }catch(err){
        console.error(err)
    }

    res.status(201).json({ message: 'todo added!' });
})

app.get('/todos/:user_id', async (req, res) => {
    const { user_id } = req.params;

    if(!user_id) return res.status(400).json({ error: 'user ID required!' });

    try{
        const todos = db.prepare(`SELECT * FROM todo WHERE user_id = ?`).all(user_id);
        res.json(todos);
    }catch(err){
        console.error(err);
    }
});

app.listen(CONSTANTS.PORT, () => { console.log(`server is running on http://localhost:${CONSTANTS.PORT}`) });