import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
        <div className="teach">
            <p>Teach for India</p>
        </div>
        
      <div className="nav-main-div">
        <Link to="/">
          <p>Registration</p>
        </Link>
        <Link to="/administrator">
          <p>Administrator</p>
        </Link>
      </div>
    </div>
  );
};
