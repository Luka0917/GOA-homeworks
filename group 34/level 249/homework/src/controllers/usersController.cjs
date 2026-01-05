let { data, usersCount } = require('../data/data.cjs');

const getAllUsers = (req, res) => res.json({ data, success: true });

const getUsersCount = (req, res) => res.json({ data: usersCount, success: true });

const getUserById = (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)) throw { status: 400, message: 'Invalid ID!' };

        const user = data.find(el => el.id == id);
        if(!user) throw { status: 404, message: 'User not Found!'}

        res.json({ data: user, success: true });
    }catch(err){
        next(err);
    }
}

const addNewUser = (req, res, next) => {
    try{
        const { userName } = req.body;
        if(!userName) throw { status: 400, message: 'Username is Required!' }

        const newUser = {
            id: data.length + 1,
            userName,
            followers: 0,
            posts: []
        }
        data.push(newUser);
        usersCount++;
        res.status(201).json({ data: newUser, usersCount, success: true });
    }catch(err){
        next(err);
    }
}

const deleteUser = (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        if(isNaN(id)) throw { status: 400, message: 'Invalid ID!' };

        const deletedUser = data.find(el => el.id === id);
        if(!deletedUser) throw { status: 404, message: 'User not Found!' };

        const remaining = data.filter(el => el.id !== id);
        data.length = 0;
        data.push(...remaining);
        res.json({ deletedUser, remaining, success: true });
    }catch(err){
        next(err)
    }
}

module.exports = {
    getAllUsers,
    getUsersCount,
    getUserById,
    addNewUser,
    deleteUser
}