import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">PJBLOG</Link>

      <div className="nav-item">
        <Link to="/login/" className="nav-link">Login</Link>
        <Link to="/register/" className="nav-link">Register</Link>
        <Link to="/profile/" className="nav-link">Profile</Link>
        <Link to="/create/" className="nav-link">CreatePost</Link>
        <Link to="/logout/" className="nav-link">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar