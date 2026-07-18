import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">
          Twin Cities <span>AI</span>
        </Link>
      </div>

      <nav>

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/providers">
          Providers
        </NavLink>

      
      </nav>

    </header>
  );
}

export default Navbar;