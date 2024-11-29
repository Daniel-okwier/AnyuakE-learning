import { NavLink } from "react-router-dom";
import { useState } from "react"; // Import useState for managing menu state
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <header>
      <nav>
        <h1>Anyuak E-learning</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/Courses" activeClassName="active">Courses</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;