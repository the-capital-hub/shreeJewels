import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css";
import logo from '../../assets/logo.png'
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Custom Jewellery", href: "/custom-jewellery" },
  { label: "Visit Our Store", href: "/visit-store" },
  { label: "Contact Us", href: "/contact" },
];

const collections = [
  { label: "Gold Jewellery", href: "/collections/gold" },
  { label: "Diamond Jewellery", href: "/collections/diamond" },
  { label: "Bridal Jewellery", href: "/collections/bridal" },
  { label: "Platinum Jewellery", href: "/collections/platinum" },
  { label: "Silver Jewellery", href: "/collections/silver" },
  { label: "Gemstone Jewellery", href: "/collections/gemstone" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: <FaInstagram /> },
  { label: "Facebook", href: "#", icon: <FaFacebookF /> },
  { label: "YouTube", href: "#", icon: <FaYoutube /> },
  { label: "WhatsApp", href: "#", icon: <FaWhatsapp /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
];

function FooterLinkList({ items }) {
  return (
    <ul className="footer__link-list">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href}>
            <FiChevronRight aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__overlay" />

      <div className="site-footer__inner">
        <div className="footer__main">
          <div className="footer__brand">
            <a className="footer__logo" href="/" aria-label="Shree Jewels home">
              <span className="footer__logo-mark" aria-hidden="true"><img src={logo} alt="" /></span>
              <span className="footer__logo-name">SHREE JEWELS</span>
              <span className="footer__tagline">
                Where Tradition Meets Timeless Elegance
              </span>
            </a>

            <p className="footer__description">
              A trusted name in fine jewellery, offering exquisite gold,
              diamond, platinum and gemstone collections that celebrate your
              most cherished moments.
            </p>

            <div className="footer__socials" aria-label="Social media">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__column" aria-label="Quick links">
            <h2>Quick Links</h2>
            <span className="footer__heading-rule" />
            <FooterLinkList items={quickLinks} />
          </nav>

          <nav className="footer__column" aria-label="Jewellery collections">
            <h2>Our Collections</h2>
            <span className="footer__heading-rule" />
            <FooterLinkList items={collections} />
          </nav>

          <div className="footer__column footer__contact">
            <h2>Get In Touch</h2>
            <span className="footer__heading-rule" />

            <div className="footer__contact-item">
              <FiMapPin aria-hidden="true" />
              <p>Kantilal Chhotalal, Sinhagad Road, Pune, Maharashtra</p>
            </div>

            <a className="footer__contact-item" href="tel:+919876543210">
              <FiPhone aria-hidden="true" />
              <p>+91 98765 43210</p>
            </a>

            <a
              className="footer__contact-item"
              href="mailto:info@shreejewels.in"
            >
              <FiMail aria-hidden="true" />
              <p>info@shreejewels.in</p>
            </a>

            <div className="footer__contact-item">
              <FiClock aria-hidden="true" />
              <p>Monday to Sunday, 10 AM to 8 PM</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Shree Jewels. All Rights Reserved.</p>

          <nav className="footer__legal" aria-label="Legal links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms and Conditions</a>
            <a href="/sitemap">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}