import React, { useState } from "react";
import { FiMail, FiCheckCircle } from "react-icons/fi";
import { FaGem, FaGift, FaBell } from "react-icons/fa";
import "./Newsletter.css";

const benefits = [
  { icon: <FaGem />, label: "New Collections" },
  { icon: <FaGift />, label: "Exclusive Offers" },
  { icon: <FaBell />, label: "Event Updates" },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="newsletter__overlay" />

      <div className="newsletter__inner">
        <div className="newsletter__content">
          <div className="newsletter__eyebrow">
            <span />
            <p>Stay Connected</p>
            <span />
          </div>

          <h2>Join Our Jewellery Circle</h2>

          <p className="newsletter__description">
            Subscribe to receive updates on new collections, exclusive
            offers, festive launches and special events at Shree Jewels.
          </p>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label className="newsletter__email-field">
              <FiMail aria-hidden="true" />
              <span className="newsletter__sr-only">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </label>

            <button type="submit">Subscribe</button>
          </form>

          {message && (
            <p className="newsletter__message" role="status">
              <FiCheckCircle aria-hidden="true" />
              {message}
            </p>
          )}

          <div className="newsletter__benefits">
            {benefits.map((benefit) => (
              <div className="newsletter__benefit" key={benefit.label}>
                <span>{benefit.icon}</span>
                <p>{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}