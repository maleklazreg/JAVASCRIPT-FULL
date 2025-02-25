import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);
  
  const getBooks = async () => {
    try {
      const result = await axios.get("http://localhost:3000/book");
      console.log(result);
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getBooks();
  }, []);
  
  return (
    <div className="books-container">
      <table className="books-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages Count</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, idx) => (
            <tr key={idx}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.pagesCount}</td>
              <td id="A4REAL" className={item.available ? "available " : "unavailable"}>
                {item.available ? "Yes" : "No"}
                <Link to={`/book/edit/${item._id}`} className="edit-button">
                  Edit
                </Link>
              </td>
              <td >
                <Link to={`/book/${item._id}`} className="view-button">
                  View Info
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
