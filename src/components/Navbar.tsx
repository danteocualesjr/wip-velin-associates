
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold gradient-text mr-8">
            GBA Accounting
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link nav-link-active">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex">
          <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
            Request Consultation
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          <Link
            to="/"
            className="nav-link py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="nav-link py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="nav-link py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button
            className="bg-accounting-700 hover:bg-accounting-800 text-white w-full mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
