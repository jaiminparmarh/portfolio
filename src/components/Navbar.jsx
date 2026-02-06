// components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    <div className="navbar">
      <i className="fa-duotone fa-solid fa-laptop-code icon"></i>

      <div className="nav-links">
        <NavLink to="/" className="nav-btn">
          Home
        </NavLink>
        <NavLink to="/skills" className="nav-btn">
          Skills
        </NavLink>
        <NavLink to="/Projects" className="nav-btn">
          Projects
        </NavLink>
        <NavLink to="/about" className="nav-btn">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-btn">
          Contact
        </NavLink>
      </div>
    </div>
    </>
  );
}
