import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        {/* Add a logo or home link */}
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
        <span className="text-muted">© 2024 GoFood, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        {/* Add navigation links or other footer items here */}
        <li className="nav-item">
          <Link to="/about" className="nav-link px-2 text-muted">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link px-2 text-muted">Contact</Link>
        </li>
      </ul>
    </footer>
  );
}
