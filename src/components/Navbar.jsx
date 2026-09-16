import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo-space">
            <Logo />
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Lakshmi Engineering</span>
            <span className="navbar__brand-sub">Products</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__gst">
          <span className="navbar__gst-label">GST No.</span>
          <span className="navbar__gst-value">33BCIPK8895C1ZC</span>
        </div>

        <button
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__mobile-gst">
            <span className="navbar__gst-label">GST No.</span>
            <span className="navbar__gst-value">33BCIPK8895C1ZC</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
