import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiShoppingBag } from "react-icons/fi";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Collections", to: "/collections" },
  { label: "Custom Jewellery", to: "/custom-jewellery" },
  { label: "Visit Our Store", to: "/visit-store" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sj-navbar">
      <div className="sj-navbar__inner">
        <Link
          to="/"
          className="sj-navbar__brand"
          aria-label="Shree Jewels home"
          onClick={closeMenu}
        >
          <img src={logo} alt="Shree Jewels" />
          <span>
            <strong>SHREE JEWELS</strong>
            <small>Where Tradition Meets Timeless Elegance</small>
          </span>
        </Link>

        <nav
          className={`sj-navbar__nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/login"
            className="sj-navbar__mobile-login"
            onClick={closeMenu}
          >
            <FiUser aria-hidden="true" />
            Login
          </Link>
        </nav>

        <div className="sj-navbar__actions">
          <Link to="/login" className="sj-navbar__login">
            <FiUser aria-hidden="true" />
            <span>Login</span>
          </Link>

          <Link
            to="/cart"
            className="sj-navbar__cart"
            aria-label="Shopping bag"
          >
            <FiShoppingBag aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="sj-navbar__menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}