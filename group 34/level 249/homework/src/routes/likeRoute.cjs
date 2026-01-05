const express = require('express');
const likeRouter = express.Router();

//^ GET --> /:userName/:index
//^ POST --> /:id/:index
//^ DELETE --> /:id/:index

const {
    getPost,
    likePost,
    dislikePost
} = require('../controllers/likeController.cjs');

likeRouter.get('/:userName/:index', getPost);

likeRouter.post('/:id/:index', likePost);

likeRouter.delete('/:id/:index', dislikePost);

module.exports = likeRouter;