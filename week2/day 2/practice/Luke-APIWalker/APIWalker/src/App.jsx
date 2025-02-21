import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ShowsByOne from './components/ShowsByOne';

const App = () => {
  const nav = useNavigate();
  const [category, setCategory] = useState("people");
  const [id, setId] = useState(1);

  const search = (e) => {
    e.preventDefault();
    nav(`/${category}/${id}`);
  };

  return (
    <div className="container mt-5">
      <form onSubmit={search}>
        <label>Search For :</label>
        <select value={category} className='form-select' name="category" id="list" onChange={(e) => setCategory(e.target.value)}>
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="starships">starships</option>
        </select>
        <label className='form-label'>ID :</label>
        <input className='form-control' type='number' value={id} onChange={(e) => setId(e.target.value)} />
        <button className='btn btn-primary mt-2'>Search</button>
      </form>
      <Routes>
        <Route path='/:category/:id' element={<ShowsByOne />} />
      </Routes>
    </div>
  );
};

export default App;