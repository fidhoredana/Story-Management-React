import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './StoryDetail.css';

const StoryDetail = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);

    useEffect(() => {
        fetchStoryData();
    }, [id]);

    const fetchStoryData = async () => {
        const response = await fetch(`/api/stories/${id}`);
        const data = await response.json();
        setStory(data);
    };

    if (!story) return <div>Loading...</div>;

    return (
        <div className="story-detail">
            <h2>{story.title}</h2>
            <p><strong>Author:</strong> {story.author}</p>
            <p><strong>Category:</strong> {story.category}</p>
            <p><strong>Status:</strong> <span className={`status-badge ${story.status.toLowerCase()}`}>{story.status}</span></p>
            <p><strong>Synopsis:</strong> {story.synopsis}</p>
            <p><strong>Tags:</strong> {story.tags.join(', ')}</p>
            <h3>Chapters</h3>
            {story.chapters.map((chapter, index) => (
                <div key={index} className="chapter-detail">
                    <h4>Chapter {index + 1}: {chapter.title}</h4>
                    <p>{chapter.content}</p>
                </div>
            ))}
            <div className="form-actions">
                <a href={`/edit-story/${story.id}`} className="edit-story-btn">Edit Story</a>
            </div>
        </div>
    );
};

export default StoryDetail;
