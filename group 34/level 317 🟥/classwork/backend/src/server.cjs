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

const db = require('./db.cjs');

const pbkdf2Async = promisify(crypto.pbkdf2);

app.use(express.json());
app.use(cors());

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) return res.status(400).json({ error: 'Username and password is required!' });

    try{
        const salt = crupto.randomBytes(16).toString('hex');

        const hash = await pbkdf2Async(password, salt, CONSTANTS.HASH_ITERATIONS, CONSTANTS.HASH_KEYLEN, CONSTANTS.HASH_DIGSET);
    }catch(err){
        console.error(err);
    }
});

app.post('/login', async (req, res) => {

});

app.listen(CONSTANTS.PORT, () => { console.log(`server is running on http://localhost:${CONSTANTS.PORT}`) });