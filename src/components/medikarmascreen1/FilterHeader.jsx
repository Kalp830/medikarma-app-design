import React, { useState } from 'react';
import './FilterHeader.css'

const filters = ['average', '30 days', 'This week', 'All'];

function FilterHeader() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="filter-container">
      {filters.map((item, index) => (
        <button
          key={index}
          className={`filter-btn ${activeFilter === item ? 'active' : ''}`}
          onClick={() => setActiveFilter(item)}
        >
          <span className={`circle ${activeFilter === item ? 'circle-active' : ''}`}></span>
          {item}
        </button>
      ))}
    </div>
  );
}

export default FilterHeader;
