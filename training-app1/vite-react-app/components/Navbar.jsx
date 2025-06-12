import { Link } from "react-router-dom";
import '../components/CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <h3>Course Portal</h3>
        <ul className="nav-links">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/placements'}>Placements</Link></li>

          <li className="dropdown">
            <span>Courses</span>
            <ul className="dropdown-menu">
              <li><Link to="/Courses/AIDS">AIDS</Link></li>
              <li><Link to="/Courses/AIML">AIML</Link></li>
              <li><Link to="/Courses/CCE">CCE</Link></li>
              <li><Link to="/Courses/CSE">CSE</Link></li>
              <li><Link to="/Courses/IT">IT</Link></li>
            </ul>
          </li>

          <li><Link to={'/Login'}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
