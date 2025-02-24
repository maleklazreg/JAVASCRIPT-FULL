import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      navigate(`/${resource}/${id}`);
    }
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
        </select>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}

          placeholder="Enter ID (e.g., 1 for Luke Skywalker)"


          min="1"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
};

export default SearchForm;