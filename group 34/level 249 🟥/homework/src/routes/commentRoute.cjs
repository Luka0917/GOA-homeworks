const express = require('express');
const commentRouter = express.Router();

//^ GET --> /id/:id/:index, /user/:userName/:index
//^ POST --> /:id/:postIndex
//^ DELETE --> /:id/:postIndex/:commentIndex

const {
    getCommentsById,
    getCommentsByUserName,
    commentOnPost,
    removeComment
} = require('../controllers/commentController.cjs');

commentRouter.get('/id/:id/:index', getCommentsById);

commentRouter.get('/user/:userName/:index', getCommentsByUserName);

commentRouter.post('/:id/:postIndex', commentOnPost);

commentRouter.delete('/:id/:postIndex/:commentIndex', removeComment);

module.exports = commentRouter;