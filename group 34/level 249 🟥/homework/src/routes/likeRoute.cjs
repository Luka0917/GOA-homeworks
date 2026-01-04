const express = require('express');
const likeRouter = express.Router();

//^ GET --> /posts/:userName/:index/like
//^ POST --> /posts/:id/:index/like
//^ DELETE --> /posts/:id/:index/like

const {
    getPost,
    likePost,
    dislikePost
} = require('../controllers/likeController.cjs');

likeRouter.get('/:userName/:index/like', getPost);

likeRouter.post('/:id/:index/like', likePost);

likeRouter.delete('/:id/:index/like', dislikePost);

module.exports = likeRouter;