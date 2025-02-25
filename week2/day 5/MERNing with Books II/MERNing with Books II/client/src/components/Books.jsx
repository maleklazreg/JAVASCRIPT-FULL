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
            <th>Book Page</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, idx) => (
            <tr key={idx}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.pagesCount}</td>
              <td id="a4real" className={item.available ? "available " : "unavailable "} >
                {item.available ? "Yes" : "No"}
              </td>
              <td>
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
