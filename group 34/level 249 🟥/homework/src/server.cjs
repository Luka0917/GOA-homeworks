const express = require('express');
const app = express();

const usersRouter = require('./routes/usersRoute.cjs');
const postRouter = require('./routes/postRoute.cjs');
const likeRouter = require('./routes/likeRoute.cjs');
const followRouter = require('./routes/followRoute.cjs');

app.use(express.json());

app.use('/users', usersRouter);
app.use('/posts', postRouter);
app.use('/likes', likeRouter);
app.use('/follow', followRouter);

module.exports = app;