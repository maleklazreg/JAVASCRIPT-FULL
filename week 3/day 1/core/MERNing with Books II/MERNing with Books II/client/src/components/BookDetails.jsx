import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  const getBook = async () => {
    try {
      const result = await axios.get(`http://localhost:3000/book/${id}`);
      console.log(result);
      setBook(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handelDelete = async () => {
    try {
      const request = await axios.delete(`http://localhost:3000/book/${id}`);
      if (request.status == 200) {
        navigate("/");
      } else {
        setError("Error removing the book");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getBook();
  }, []);
  
  return (
    <main className="details-container">
      {book ? (
        <div className="book-card">
          <div className="book-header">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">by {book.author}</p>
          </div>
          <div className="book-body">
            <p className="book-pages">
              <span className="label">Pages:</span> {book.pagesCount}
            </p>
            <p className={`book-status ${book.available ? "available" : "unavailable"}`}>
              {book.available ? "Available" : "Not Available"}
            </p>
          </div>
          <div className="book-footer">
            <button onClick={handelDelete} className="borrow-button">
              Borrow
            </button>
          </div>
        </div>
      ) : (
        <div className="error-message">Book with ID {id} not found</div>
      )}
      {error && <p className="error-message">{error}</p>}
    </main>
  );
}
