import axios from 'axios';

const API_URL = 'http://localhost:5000/api/stories';

export const getStories = () => {
    return axios.get(API_URL);
};

export const getStoryById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const addStory = (storyData) => {
    return axios.post(API_URL, storyData);
};

export const updateStory = (id, storyData) => {
    return axios.put(`${API_URL}/${id}`, storyData);
};

export const deleteStory = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
