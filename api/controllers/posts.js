const Post = require('../models/posts');

const getAllPost = async (req, res) => {
  try {
    const data = await Post.find({}).sort({ createdAt: -1 }).limit(10);
    if(!data) {
      return res.status(404).json({ message: 'No post found' });
    }
    else{
        return res.status(200).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
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