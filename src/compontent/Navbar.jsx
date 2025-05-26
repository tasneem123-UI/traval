import React from 'react';
import { Link } from 'react-router-dom'; // تصحيح استيراد Link
import { 
  House,
  InfoCircle,
  BoxArrowInRight,
  PersonPlus 
} from 'react-bootstrap-icons'; // استيراد الأيقونات بشكل صحيح
import log from "../Assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
      <div className="container-fluid">
        {/* Logo مع Link */}
        <Link to="/" className="navbar-brand p-0">
          <img 
            src={log} 
            alt="Company Logo" 
            style={{width: "80px", height: "auto"}}
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row align-items-center gap-lg-4 gap-2">
            {/* Home */}
            <Link to="/" className="nav-link d-flex align-items-center px-3">
              <House className="fs-5 me-2 text-primary" />
              <span className="fs-5 fw-medium">Home</span>
            </Link>

            {/* About */}
            <Link to="/about" className="nav-link d-flex align-items-center px-3 py-2 bg-light rounded">
              <InfoCircle className="fs-5 me-2 text-success" />
              <span className="fs-5 fw-medium">About</span>
            </Link>

            {/* Login */}
            <Link to="/login" className="nav-link d-flex align-items-center px-3 py-2 rounded">
              <BoxArrowInRight className="fs-5 me-2 text-warning" />
              <span className="fs-5 fw-medium">Login</span>
            </Link>

            {/* Register */}
            <Link to="/register" className="nav-link d-flex align-items-center px-3 py-2 bg-light rounded">
              <PersonPlus className="fs-5 me-2 text-info" />
              <span className="fs-5 fw-medium">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}