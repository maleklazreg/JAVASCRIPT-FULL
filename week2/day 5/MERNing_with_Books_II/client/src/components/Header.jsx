// Books_FULL/client/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Book Haven</h1>
      <nav>
        <Link to="/" className="nav-btn">All Books</Link>
        <Link to="/new" className="nav-btn">Add Book</Link>
      </nav>
    </header>
  );
};

export default Header;