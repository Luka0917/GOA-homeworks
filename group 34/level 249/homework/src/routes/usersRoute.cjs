const express = require('express');
const usersRouter = express.Router();

//^ GET --> /, /count, /:id
//^ POST --> /
//^ DELETE --> /:id

const {
    getAllUsers,
    getUsersCount,
    getUserById,
    addNewUser,
    deleteUser
} = require('../controllers/usersController.cjs');

usersRouter.get('/', getAllUsers);

usersRouter.get('/count', getUsersCount);

usersRouter.get('/:id', getUserById);

usersRouter.post('/', addNewUser);

usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;