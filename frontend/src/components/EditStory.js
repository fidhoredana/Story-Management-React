import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditStory.css';

const EditStory = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [category, setCategory] = useState('');
    const [cover, setCover] = useState(null);
    const [tags, setTags] = useState([]);
    const [status, setStatus] = useState('');
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        fetchStoryData();
    }, [id]);

    const fetchStoryData = async () => {
        const response = await fetch(`/api/stories/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setAuthor(data.author);
        setSynopsis(data.synopsis);
        setCategory(data.category);
        setTags(data.tags);
        setStatus(data.status);
        setChapters(data.chapters);
    };

    const handleAddTag = (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
            setTags([...tags, e.target.value.trim()]);
            e.target.value = '';
        }
    };

    const handleRemoveTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    const handleAddChapter = () => {
        setChapters([...chapters, { title: '', content: '' }]);
    };

    const handleChapterChange = (index, field, value) => {
        const updatedChapters = chapters.map((chapter, i) => {
            if (i === index) {
                return { ...chapter, [field]: value };
            }
            return chapter;
        });
        setChapters(updatedChapters);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="edit-story">
            <h2>Edit Story</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Synopsis</label>
                    <textarea
                        value={synopsis}
                        onChange={(e) => setSynopsis(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Financial">Financial</option>
                        <option value="Technology">Technology</option>
                        <option value="Health">Health</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Story Cover</label>
                    <input
                        type="file"
                        onChange={(e) => setCover(e.target.files[0])}
                    />
                </div>
                <div className="form-group">
                    <label>Tags/Keywords</label>
                    <input
                        type="text"
                        onKeyDown={handleAddTag}
                        placeholder="Press 'Enter' to add a tag"
                    />
                    <div className="tag-list">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                                <button type="button" onClick={() => handleRemoveTag(index)}>
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Publish">Publish</option>
                        <option value="Draft">Draft</option>
                    </select>
                </div>
                <div className="form-group">
                    <h3>Chapters</h3>
                    {chapters.map((chapter, index) => (
                        <div key={index} className="chapter">
                            <input
                                type="text"
                                placeholder="Chapter Title"
                                value={chapter.title}
                                onChange={(e) =>
                                    handleChapterChange(index, 'title', e.target.value)
                                }
                                required
                            />
                            <textarea
                                placeholder="Chapter Content"
                                value={chapter.content}
                                onChange={(e) =>
                                    handleChapterChange(index, 'content', e.target.value)
                                }
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={handleAddChapter}>
                        + Add New Chapter
                    </button>
                </div>
                <div className="form-actions">
                    <button type="submit">Update Story</button>
                    <button type="button" onClick={() => window.history.back()}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditStory;
