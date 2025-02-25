import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    author: "",
    pagesCount: 0,
    available: false
  });
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    pagesCount: "",
    server: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  // Fetch book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`http://localhost:3000/book/${id}`);
        setBook(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrors({
          ...errors,
          server: "Failed to load book data"
        });
        setLoading(false);
      }
    };
    
    fetchBook();
  }, [id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setBook({
      ...book,
      [name]: name === "pagesCount" ? (value === "" ? 0 : parseInt(value)) : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  
  const handleChecked = () => {
    setBook((b) => {
      return { ...b, available: !b.available };
    });
  };
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!book.title.trim()) {
      tempErrors.title = "Title is required";
      isValid = false;
    } else if (book.title.trim().length < 2) {
      tempErrors.title = "Title must be at least 2 characters";
      isValid = false;
    }
    
    if (!book.author.trim()) {
      tempErrors.author = "Author is required";
      isValid = false;
    } else if (book.author.trim().length < 2) {
      tempErrors.author = "Author must be at least 2 characters";
      isValid = false;
    }
    
    if (book.pagesCount <= 0) {
      tempErrors.pagesCount = "Pages count must be greater than 0";
      isValid = false;
    } else if (book.pagesCount > 10000) {
      tempErrors.pagesCount = "Pages count cannot exceed 10,000";
      isValid = false;
    }
    
    setErrors({...errors, ...tempErrors});
    return isValid;
  };
  
  const updateBook = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await axios.put(`http://localhost:3000/book/${id}`, book);
        navigate(`/book/${id}`);
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data) {
          setErrors({
            ...errors,
            server: error.response.data.message || "Failed to update book"
          });
        } else {
          setErrors({
            ...errors,
            server: "Network error. Please try again."
          });
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  if (loading) {
    return (
      <div className="form-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }
  
  return (
    <main className="form-container">
      <form onSubmit={updateBook} className="book-form">
        <h2 className="form-title">Update "{book.title}"</h2>
        
        {errors.server && <div className="error-message">{errors.server}</div>}
        
        <div className="form-field">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            onChange={handleChange}
            name="title"
            value={book.title}
            id="title"
            className={`form-input ${errors.title ? "input-error" : ""}`}
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>
        
        <div className="form-field">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            onChange={handleChange}
            name="author"
            value={book.author}
            id="author"
            className={`form-input ${errors.author ? "input-error" : ""}`}
          />
          {errors.author && <p className="error-text">{errors.author}</p>}
        </div>
        
        <div className="form-field">
          <label htmlFor="pagesCount" className="form-label">Pages Count</label>
          <input
            type="number"
            onChange={handleChange}
            name="pagesCount"
            value={book.pagesCount}
            id="pagesCount"
            className={`form-input ${errors.pagesCount ? "input-error" : ""}`}
          />
          {errors.pagesCount && <p className="error-text">{errors.pagesCount}</p>}
        </div>
        
        <div className="checkbox-field">
          <input
            type="checkbox"
            onChange={handleChecked}
            name="available"
            checked={book.available}
            id="available"
            className="form-checkbox"
          />
          <label htmlFor="available" className="checkbox-label">Available</label>
        </div>
        
        <div className="form-buttons">
          <button 
            type="button" 
            className="cancel-button" 
            onClick={() => navigate(`/book/${id}`)}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update Book"}
          </button>
        </div>
      </form>
    </main>
  );
}
