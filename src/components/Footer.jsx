import ieeeLogo from "../assets/ieee.png";
import ieeeCisLogo from "../assets/ieee-cis.png";
import vvceLogo from "../assets/vvce-logo.png";
import { useEffect, useState } from "react";

function Footer() {
  useEffect(() => {
    fetch("https://ayusht05.goatcounter.com/counter/TOTAL.json")
      .then(res => res.json())
      .then(data => {
        const el = document.getElementById("visit-counter");
        if (el) el.textContent = data.count;
      })
      .catch(console.error);
  }, []);
  return (
    <footer className="footer">

      {/* LOGOS */}
      <div className="footer-logos">
        <img src={ieeeLogo} alt="IEEE" className="footer-logo-img ieee" />
        <img src={vvceLogo} alt="VVCE" className="footer-logo-img vvce" />
        <img src={ieeeCisLogo} alt="IEEE CIS" className="footer-logo-img cis" />
      </div>

      {/* INFO */}
      <div className="footer-info">
        Vidyavardhaka College of Engineering<br />
        Gokulam 3rd Stage, Mysuru – 570 002, Karnataka, India<br />
        Autonomous Institute, Affiliated to VTU, Belagavi · Accredited by NBA & NAAC with A Grade
      </div>

      {/* COUNTER */}
      <div style={{ color: "white", fontSize: "0.85rem", marginTop: "4px" }}>
        Visitors: <span id="visit-counter">...</span>
      </div>

      {/* INSTAGRAM */}
      <a
        href="https://instagram.com/ieee.cis.vvce"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-insta"
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        @ieee.cis.vvce
      </a>

    </footer>
  );
}

export default Footer;




