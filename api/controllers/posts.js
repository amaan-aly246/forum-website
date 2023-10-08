const Post = require('../models/posts');

const getAllPost = async (req, res) => {
  
}

const getMyPost = (req, res) => {
    res.send('get my post ');
}

const createPost = async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
       } catch (error) {
        console.log('error controller ', error.message)
       }
}

const deletePost = (req, res) => {
    res.send('delete post');
}

const getEachPost = (req, res) => {
    res.send('get each post');
}

const getOneMyPost = (req, res) => {
    res.send('get one my post');
}
module.exports = { getAllPost, getMyPost, createPost, getOneMyPost, deletePost, getEachPost };