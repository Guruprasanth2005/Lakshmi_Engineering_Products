import Logo from "./Logo.jsx";
import "./Footer.css";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <span className="footer__logo-space">
              <Logo />
            </span>
            <span className="footer__brand-name">Lakshmi Engineering Products</span>
          </div>
          <p className="footer__desc">
            Quality engineering products and reliable industrial solutions,
            supplied with consistency you can build a schedule around.
          </p>
          <p className="footer__gst">
            GST Number: <span>33BCIPK8895C1ZC</span>
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>Phone: +91 7942867644</li>
            <li>Email: lakshmiskv09@gmail.com</li>
            <li>Address: Lakshmi Engineering Products 121/3, Kamban Street Vinayagapuram, Saravanampatti PO Coimbatore - 641035, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container dim-rule">
          <p className="footer__copyright">
            © 2026 Lakshmi Engineering Products. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
