import React, { useState, useEffect } from 'react';
import StoryTable from '../components/StoryTable';
import StoryFilter from '../components/StoryFilter';
import { getStories } from '../services/storyService';

const StoryList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        async function fetchStories() {
            const response = await getStories();
            setStories(response.data);
        }

        fetchStories();
    }, []);

    return (
        <div>
            <StoryFilter />
            <StoryTable stories={stories} />
        </div>
    );
};

export default StoryList;
