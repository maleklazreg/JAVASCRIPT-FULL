import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-buttons">
        <Link to={"/"} className="nav-button">
          Catalog
        </Link>
        <Link to={"/book/create"} className="nav-button">
          Add Book
        </Link>
      </div>
      <h1 className="nav-title">Book Catalog</h1>
    </nav>
  );
}
