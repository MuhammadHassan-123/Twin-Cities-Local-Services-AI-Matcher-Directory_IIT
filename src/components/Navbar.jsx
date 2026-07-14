import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Twin Cities AI</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/providers">Providers</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;