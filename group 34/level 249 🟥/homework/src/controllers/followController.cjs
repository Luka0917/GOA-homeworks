const { data } = require('../data/data.cjs');

const getUsersFollowersWithId = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    res.json({ userName: user.userName, followers: user.followers, success: true });
}

const getUsersFollowersWithUserName = (req, res) => {
    const userName = req.params.userName;
    const user = data.find(el => el.userName === userName);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    res.json({ userName: user.userName, followers: user.followers, success: true });
}

const followUser = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    
    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    user.followers++;
    res.json({ userName: user.userName, followers: user.followers, success: true });
}

const unfollowUser = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    
    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    if(user.followers === 0) return res.status(400).json({ message: 'User has no Followers to Remove!', success: false });
    user.followers--;
    res.json({ userName: user.userName, followers: user.followers, success: true });
}

module.exports = {
    getUsersFollowersWithId,
    getUsersFollowersWithUserName,
    followUser,
    unfollowUser
}