const express = require('express');
const postRouter = express.Router();

//^ GET --> /:id, /user/:userName
//^ POST --> /:id
//^ DELETE --> /:id/:index

const {
    getUsersPostsById,
    getUsersPostsByUserName,
    addNewPost,
    deletePostWithIdAndIndex
} = require('../controllers/postController.cjs');

postRouter.get('/:id', getUsersPostsById);

postRouter.get('/user/:userName', getUsersPostsByUserName);

postRouter.post('/:id', addNewPost);

postRouter.delete('/:id/:index', deletePostWithIdAndIndex);

module.exports = postRouter;