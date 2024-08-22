const express = require('express');
const router = express.Router();
const { getStories, addStory, updateStory, deleteStory, getStoryById } = require('../controllers/storyController');

router.get('/', getStories);
router.post('/', addStory);
router.get('/:id', getStoryById);
router.put('/:id', updateStory);
router.delete('/:id', deleteStory);

module.exports = router;
