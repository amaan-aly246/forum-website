const Post = require('../models/posts');
const Comment = require('../models/comment');
const getAllPost = async (req, res) => {
  try {
    const data = await Post.find({}).sort({ createdAt: -1 }).limit(10);
    if (!data) {
      return res.status(404).json({ message: 'No post found' });
    }
    else {
      return res.status(200).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
}

const getMyPost = async (req, res) => {
  try {
    const currentUser = req.query.currentUser;
    console.log("from controller", currentUser);
    const data = await Post.find({ username: currentUser }).sort({ createdAt: -1 }).limit(10);
    if (!data) {
      return res.status(404).json({ message: 'No post found' });
    }
    else {
      return res.status(200).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
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



const getEachPost = async (req, res) => {
  try {
    const postId = req.query.postId;
    const postData = await Post.findById(postId);
    res.status(200).json(postData);
  } catch (error) {
    console.log(error.message);
  }
}

const getOneMyPost =  (req, res) => {
  
}

const createComment = async (req, res) => {
  try {
    const { postID, username, comment } = req.body;
    const commentData = await Comment.create({ postID, username, comment });
    res.status(200).json(commentData);

  } catch (error) {
    console.log(error.message);
  }
}



const fetchComment = async (req, res) => {
  try {
    const postID = req.query.postID;
    const Data = await Comment.find({ postID }).sort({ createdAt: -1 }).limit(10)
    if (Data) {
      res.status(200).json(Data);
    }
    else {
      res.status(404).send('No comment found');
    }
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = { getAllPost, getMyPost, createPost, getOneMyPost, deletePost, getEachPost, createComment, fetchComment };