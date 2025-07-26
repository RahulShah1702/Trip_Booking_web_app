import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">XYZ Travel</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/search">Explore</Link>
      </div>
    </nav>
  );
}

export default Navbar;