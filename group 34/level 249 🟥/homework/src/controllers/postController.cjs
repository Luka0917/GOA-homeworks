const { data } = require('../data/data.cjs');

const getUsersPostsById = (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    res.json({ data: user.posts, success: true });
}

const getUsersPostsByUserName = (req, res) => {
    const userName = req.params.userName;
    const user = data.find(el => el.userName === userName);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    res.json({ data: user.posts, success: true });
}

const addNewPost = (req, res) => {
    const { title, post } = req.body
    const id = parseInt(req.params.id);

    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(!post) return res.status(400).json({ message: 'There is no Post!', success: false });
    
    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const newPost = {
        title: title || 'New Post',
        post,
        likes: 0,
        comments: []
    }
    user.posts.push(newPost);
    res.status(201).json({ data: newPost, success: true });
}

const deletePostWithIdAndIndex = (req, res) => {
    const id = parseInt(req.params.id);
    const index = parseInt(req.params.index);

    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(isNaN(index)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(index < 0 || index >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });

    const deletedPost = posts.splice(index, 1)[0];
    res.json({ deletedPost, remaining: posts, success: true });
}

module.exports = {
    getUsersPostsById,
    getUsersPostsByUserName,
    addNewPost,
    deletePostWithIdAndIndex
}