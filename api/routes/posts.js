const express = require('express');
const router = express.Router();

const { getAllPost, getEachPost, getMyPost, createPost, createComment, updateVoteCount, fetchComment } = require('../controllers/posts');

router.route('/getallPost').get(getAllPost).patch(updateVoteCount);

router.route('/myPost').get(getMyPost);

router.route('/').get(getEachPost)
router.route('/createPost').post(createPost);

router.route('/comment').post(createComment)
router.route('/comment/').get(fetchComment)


module.exports = router;