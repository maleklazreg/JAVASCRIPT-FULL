// Books_FULL/client/src/components/BookDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error('Error fetching book:', err));
  }, [id]);

  const handleBorrow = () => {
    axios.delete(`http://localhost:8000/api/books/${id}`)
      .then(() => navigate('/'))
      .catch(err => console.error('Error deleting book:', err));
  };

  if (!book) return <p className="loading">Loading...</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <div className="details-grid">
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
        <p><strong>Available:</strong> {book.isAvailable ? 'Yes' : 'No'}</p>
        <p><strong>Added:</strong> {new Date(book.createdAt).toLocaleDateString()}</p>
      </div>
      <button onClick={handleBorrow} className="borrow-btn">Borrow</button>
    </div>
  );
};

export default BookDetails;