import React, { useState, useEffect } from 'react';
import FilterModal from './FilterModal';
import './StoryList.css';

const StoryList = () => {
    const [stories, setStories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filteredStories, setFilteredStories] = useState([]);

    useEffect(() => {
        fetchStories();
    }, []);

    const fetchStories = async () => {
        const response = await fetch('/api/stories');
        const data = await response.json();
        setStories(data);
        setFilteredStories(data);
    };

    const handleFilter = (filterCriteria) => {
        let filtered = stories;

        if (filterCriteria.categories.length > 0) {
            filtered = filtered.filter(story => filterCriteria.categories.includes(story.category));
        }

        if (filterCriteria.status) {
            filtered = filtered.filter(story => story.status === filterCriteria.status);
        }

        setFilteredStories(filtered);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = stories.filter(
            (story) =>
                story.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                story.author.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredStories(filtered);
    };

    return (
        <div className="story-list">
            <div className="story-header">
                <h2>Story Management</h2>
                <div className="story-actions">
                    <input
                        type="text"
                        placeholder="Search by Title or Author"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button onClick={() => setIsFilterModalOpen(true)}>Filter</button>
                    <a href="/add-story" className="add-story-btn">+ Add Story</a>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStories.length > 0 ? (
                        filteredStories.map((story, index) => (
                            <tr key={story.id}>
                                <td>{index + 1}</td>
                                <td>{story.title}</td>
                                <td>{story.author}</td>
                                <td>{story.category}</td>
                                <td>
                                    {story.tags.map((tag, idx) => (
                                        <span key={idx} className="tag-badge">
                                            {tag}
                                        </span>
                                    ))}
                                </td>
                                <td>
                                    <span className={`status-badge ${story.status.toLowerCase()}`}>
                                        {story.status}
                                    </span>
                                </td>
                                <td>
                                    <a href={`/edit-story/${story.id}`}>Edit</a>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No stories available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onFilter={handleFilter}
            />
        </div>
    );
};

export default StoryList;
