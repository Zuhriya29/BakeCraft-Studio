import '../styles/Navbar.css'
import { useState, useEffect } from "react";


function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let active = "home"; // Default section
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          active = section.id;
        }
      });
      setActiveLink(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-sm position-sticky">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/images/logo.jpg" alt="Logo" width="auto" height="40" className="d-inline-block align-text-top me-2"/>
          <p>BakeCraft Studio</p>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className={`nav-link ${activeLink === "home" ? "active" : ""}`} href="#home">Home</a>
            <a className={`nav-link ${activeLink === "aboutus" ? "active" : ""}`} href="#aboutus">About Us</a>
            <a className={`nav-link ${activeLink === "courses" ? "active" : ""}`} href="#courses">Courses</a>
            <a className={`nav-link ${activeLink === "fasilitas" ? "active" : ""}`} href="#fasilitas">Fasilitas</a>
            <a className={`nav-link ${activeLink === "contact" ? "active" : ""}`} href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
