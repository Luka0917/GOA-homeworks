const { data } = require('../data/data.cjs');

const getPost = (req, res) => {
    const userName = req.params.userName;
    const index = parseInt(req.params.index);

    const user = data.find(el => el.userName === userName);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });
    if(isNaN(index)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const posts = user.posts;
    if(index < 0 || index >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });

    res.json({ data: posts[index], success: true });
}

const likePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = parseInt(req.params.index);
    
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(isNaN(index)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(index < 0 || index >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });
    
    posts[index].likes++;

    res.json({ likedPost: posts[index], success: true });
}

const dislikePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = parseInt(req.params.index);
    
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(isNaN(index)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(index < 0 || index >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });
    
    if(posts[index].likes > 0) posts[index].likes--;

    res.json({ dislikedPost: posts[index], success: true });
}

module.exports = {
    getPost,
    likePost,
    dislikePost
}