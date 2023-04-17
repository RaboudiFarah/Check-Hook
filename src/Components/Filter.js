import React from 'react';

const Filter = ({ onTitleFilterChange, onRatingFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => onTitleFilterChange(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        onChange={(e) => onRatingFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
