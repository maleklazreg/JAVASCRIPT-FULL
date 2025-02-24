import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Home from './pages/Home';
import CharacterDetail from './components/CharacterDetail';
import PlanetDetail from './components/PlanetDetail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="container">
        <SearchForm /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:id" element={<CharacterDetail />} />
          <Route path="/planets/:id" element={<PlanetDetail />} />
          <Route path="/starships/:id" element={<NotFound />} /> 
          <Route path="/vehicles/:id" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;