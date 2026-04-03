import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav>


        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#domains">Domains</a></li>
          <li><a href="#timeline">Schedule</a></li>
          <li><a href="#register">Register</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQs</a></li>
        </ul>

        

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div
        className="mobile-menu"
        id="mobileMenu"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#domains" onClick={closeMenu}>Domains</a>
        <a href="#timeline" onClick={closeMenu}>Schedule</a>
        <a href="#register" onClick={closeMenu}>Register</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#faq" onClick={closeMenu}>FAQs</a>   

        <a href="https://docs.google.com/forms/d/e/1FAIpQLScNL5k6rIkWgJW6vDy2zkgjG-76oth5cLgl30ijKgkrnp3-jA/viewform" className="nav-cta" onClick={closeMenu}>
          Register Now →
        </a>
      </div>
    </>
  );
}

export default Navbar;