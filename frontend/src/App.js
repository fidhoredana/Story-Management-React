import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StoryList from './components/StoryList';
import AddStory from './components/AddStory';
import EditStory from './components/EditStory';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<StoryList />} />
            <Route path="/add-story" element={<AddStory />} />
            <Route path="/edit-story/:id" element={<EditStory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
