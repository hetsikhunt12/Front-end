import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top shadow-lg border-bottom border-primary">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-info" to="/">
          Chef<span className="text-warning">Zone</span> 👨‍🍳
        </Link>

        {/* Toggle Button */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold hover-warning" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/menu">Menu</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/chef">Chefs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/Not">Not</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/Register">Register</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light fw-semibold" to="/Login"> Login</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
