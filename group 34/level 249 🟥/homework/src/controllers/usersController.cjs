let { data, usersCount } = require('../data/data.cjs');

const getAllUsers = (req, res) => res.json({ data, success: true });

const getUsersCount = (req, res) => res.json({ data: usersCount, success: true });

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });

    const user = data.find(el => el.id == id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    res.json({ data: user, success: true });
}

const addNewUser = (req, res) => {
    const { userName } = req.body;
    if(!userName) return res.status(400).json({ message: 'Username is Required!', success: false });

    const newUser = {
        id: data.length + 1,
        userName,
        followers: 0,
        posts: []
    }
    data.push(newUser);
    usersCount++;
    res.status(201).json({ data: newUser, usersCount, success: true });
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });

    const deletedUser = data.find(el => el.id === id);
    if(!deletedUser) return res.status(404).json({ message: 'User not Found!', success: false });

    const remaining = data.filter(el => el.id !== id);
    data.length = 0;
    data.push(...remaining);
    res.json({ deletedUser, remaining, success: true });
}

module.exports = {
    getAllUsers,
    getUsersCount,
    getUserById,
    addNewUser,
    deleteUser
}