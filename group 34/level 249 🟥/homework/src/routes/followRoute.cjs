const express = require('express');
const followRouter = express.Router();

//^ GET --> /id/:id, /user/:userName
//^ POST --> /:id
//^ DELETE --> /:id

const {
    getUsersFollowersWithId,
    getUsersFollowersWithUserName,
    followUser,
    unfollowUser
} = require('../controllers/followController.cjs');

followRouter.get('/id/:id', getUsersFollowersWithId);

followRouter.get('/user/:userName', getUsersFollowersWithUserName);

followRouter.post('/:id', followUser);

followRouter.delete('/:id', unfollowUser);

module.exports = followRouter;