const Story = require('../models/Story');

const getStories = async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getStoryById = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.json(story);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addStory = async (req, res) => {
    try {
        const story = new Story(req.body);
        const savedStory = await story.save();
        res.status(201).json(savedStory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateStory = async (req, res) => {
    try {
        const updatedStory = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.json(updatedStory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteStory = async (req, res) => {
    try {
        const deletedStory = await Story.findByIdAndDelete(req.params.id);
        if (!deletedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.json({ message: 'Story deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getStories,
    getStoryById,
    addStory,
    updateStory,
    deleteStory,
};
