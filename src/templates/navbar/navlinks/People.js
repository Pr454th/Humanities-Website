import { Link } from "react-router-dom";

const People = () => {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        id="menu"
        data-bs-toggle="dropdown"
        className="nav-link navbarLink dropdown-toggle"
        data-bs-display="static"
      >
        People
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/faculty/teaching" className="dropdown-item">
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/faculty/non-teaching" className="dropdown-item">
            Staff
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default People;
