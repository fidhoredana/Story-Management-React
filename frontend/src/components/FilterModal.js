import React, { useState } from 'react';
import './FilterModal.css';

const FilterModal = ({ isOpen, onClose, onFilter }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState('');

    const categories = ['Financial', 'Technology', 'Health'];
    const statuses = ['Publish', 'Draft'];

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevState => {
            if (prevState.includes(category)) {
                return prevState.filter(cat => cat !== category);
            } else {
                return [...prevState, category];
            }
        });
    };

    const handleFilter = () => {
        onFilter({ categories: selectedCategories, status: selectedStatus });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="filter-modal">
            <div className="filter-modal-content">
                <h3>Filter Stories</h3>
                <div className="filter-group">
                    <h4>Categories</h4>
                    {categories.map((category, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                        </label>
                    ))}
                </div>
                <div className="filter-group">
                    <h4>Status</h4>
                    {statuses.map((status, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="status"
                                value={status}
                                checked={selectedStatus === status}
                                onChange={() => setSelectedStatus(status)}
                            />
                            {status}
                        </label>
                    ))}
                </div>
                <div className="filter-actions">
                    <button onClick={handleFilter}>Apply</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
