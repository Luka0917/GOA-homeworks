const { data } = require('../data/data.cjs');

const getCommentsById = (req, res) => {
    const id = parseInt(req.params.id);
    const index = parseInt(req.params.index);

    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(isNaN(index)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(index < 0 || index >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });

    const comments = posts[index].comments;
    res.json({ data: comments, success: true });
}

const getCommentsByUserName = (req, res) => {
    const userName = req.params.userName;
    const index = parseInt(req.params.index);

    if(isNaN(index)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.userName === userName);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(index < 0 || index >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });

    const comments = posts[index].comments;
    res.json({ data: comments, success: true });
}

const commentOnPost = (req, res) => {
    const { userName, comment } = req.body;
    const id = parseInt(req.params.id);
    const postIndex = parseInt(req.params.postIndex);

    if(!userName) return res.status(400).json({ message: 'Enter UserName!', success: false });
    if(!comment) return res.status(400).json({ message: 'Enter Comment!', success: false });
    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(isNaN(postIndex)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(postIndex < 0 || postIndex >= posts.length) return res.status(400).json({ message: 'Index Out of Range!', success: false });

    const comments = posts[postIndex].comments;
    const newComment = { userName, comment, likes: 0 };
    comments.push(newComment);
    res.status(201).json({ newComment, success: true });
}

const removeComment = (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = parseInt(req.params.postIndex);
    const commentIndex =parseInt(req.params.commentIndex);

    if(isNaN(id)) return res.status(400).json({ message: 'Invalid ID!', success: false });
    if(isNaN(postIndex)) return res.status(400).json({ message: 'Invalid Index!', success: false });

    const user = data.find(el => el.id === id);
    if(!user) return res.status(404).json({ message: 'User not Found!', success: false });

    const posts = user.posts;
    if(postIndex < 0 || postIndex >= posts.length) return res.status(400).json({ message: 'Post Index Out of Range!', success: false });

    const comments = posts[postIndex].comments;
    if(commentIndex < 0 || commentIndex >= comments.length) return res.status(400).json({ message: 'Comment Index Out of Range!', success: false });

    const deletedComment = comments.splice(commentIndex, 1)[0];
    res.json({ deletedComment, remaining: posts[postIndex].comments, success: true });
}

module.exports = {
    getCommentsById,
    getCommentsByUserName,
    commentOnPost,
    removeComment
}