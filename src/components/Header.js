import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
    <h1>EZTech Movie</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <input type="text" placeholder="Search movies..." />
    </header>
  );
}

export default Header;
