const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    title: String,
    content: String,
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

const storySchema = new mongoose.Schema({
    title: String,
    author: String,
    synopsis: String,
    category: String,
    coverImage: String,
    tags: [String],
    status: {
        type: String,
        enum: ['Publish', 'Draft'],
        default: 'Draft',
    },
    chapters: [chapterSchema],
});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;
