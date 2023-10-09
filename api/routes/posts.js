const express = require('express');
const router = express.Router();

const { getAllPost, getOneMyPost, getEachPost, getMyPost, createPost, deletePost } = require('../controllers/posts');

router.route('/getallPost').get(getAllPost);
router.route('/myPost').get(getMyPost);
router.route('/').get(getEachPost);
router.route('/createPost').post(createPost);
router.route('/myPost/:id').delete(deletePost).get(getOneMyPost);


module.exports = router;