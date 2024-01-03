// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './components.css'

const Navbar = () => {
  return (
    <div className="flex direction-row bg-blue-500 p-4">
      <div className="nav_container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          My Website
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/services" className="text-white">
            Services
          </Link>
          <Link to="/projects" className="text-white">
            Projects
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
