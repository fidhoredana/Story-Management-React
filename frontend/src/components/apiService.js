const API_BASE_URL = '/api/stories';

export const getStories = async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch stories');
    }
    return response.json();
};

export const getStoryById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch story');
    }
    return response.json();
};

export const createStory = async (storyData) => {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storyData),
    });
    if (!response.ok) {
        throw new Error('Failed to create story');
    }
    return response.json();
};

export const updateStory = async (id, storyData) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storyData),
    });
    if (!response.ok) {
        throw new Error('Failed to update story');
    }
    return response.json();
};

export const deleteStory = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete story');
    }
    return response.json();
};
