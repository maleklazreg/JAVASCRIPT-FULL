import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pagesCount: 0,
    available: false,
  });
  
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    pagesCount: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
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
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const addBook = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const result = await axios.post(`http://localhost:3000/book/`, book);
        console.log(result);
        setBook(result.data);
        navigate("/");
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data) {
          // Handle server validation errors if any
          setErrors({
            ...errors,
            server: error.response.data.message || "Failed to add book"
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
  
  return (
    <main className="form-container">
      <form onSubmit={addBook} className="book-form">
        <h2 className="form-title">Add Book</h2>
        
        {errors.server && (
          <div className="error-message">{errors.server}</div>
        )}
        
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
        
        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add Book"}
        </button>
      </form>
    </main>
  );
}
