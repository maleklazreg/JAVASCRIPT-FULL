import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import WordDisplay from './components/WordDisplay';
import StyledWordDisplay from './components/StyleWordDisplay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/number/:number" element={<NumberDisplay />} />
        <Route path="/word/:word" element={<WordDisplay />} />
        <Route path="/styled/:word/:textColor/:bgColor" element={<StyledWordDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;