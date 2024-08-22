import React from 'react';

const StoryTable = ({ stories }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Tags</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {stories.map(story => (
                    <tr key={story._id}>
                        <td>{story.title}</td>
                        <td>{story.author}</td>
                        <td>{story.category}</td>
                        <td>{story.tags.join(', ')}</td>
                        <td>{story.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StoryTable;
