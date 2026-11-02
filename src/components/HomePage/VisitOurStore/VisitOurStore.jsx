import React from "react";
import {
  FiMapPin,
  FiClock,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import "./VisitOurStore.css";
import store from '../../../assets/store/store.jpg'
const storeDetails = [
  {
    icon: <FiMapPin />,
    title: "Our Store",
    lines: ["Kantilal Chhotalal, Sinhagad Road", "Pune, Maharashtra"],
  },
  {
    icon: <FiClock />,
    title: "Store Timings",
    lines: ["Monday to Sunday", "10:00 AM to 8:00 PM"],
  },
  {
    icon: <FiPhone />,
    title: "Contact Us",
    lines: ["+91 98765 43210"],
  },
];

export default function VisitOurStore() {
  return (
    <section className="visit-store">
      <div className="visit-store__overlay" />

      <div className="visit-store__inner">
        <div className="visit-store__content">
          <div className="visit-store__eyebrow">
            <span />
            <p>Visit Our Store</p>
            <span />
          </div>

          <h2>Experience Our Collection In Person</h2>

          <p className="visit-store__intro">
            Step into our store and explore a stunning range of gold,
            diamond, platinum, and gemstone jewellery with personalised
            assistance from our experts.
          </p>

          <div className="visit-store__details">
            {storeDetails.map((item) => (
              <div className="visit-store__detail" key={item.title}>
                <span className="visit-store__detail-icon">{item.icon}</span>

                <div>
                  <h3>{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="visit-store__actions">
            <a
              className="visit-store__button visit-store__button--primary"
              href="https://www.google.com/maps/search/?api=1&query=Kantilal+Chhotalal+Sinhagad+Road+Pune"
              target="_blank"
              rel="noreferrer"
            >
              <FiMapPin />
              <span>Get Directions</span>
              <FiArrowUpRight />
            </a>

            <a
              className="visit-store__button visit-store__button--secondary"
              href="tel:+919876543210"
            >
              <FiPhone />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        <div className="visit-store__visual">
          <img
            src={store}
            alt="Shree Jewels storefront with illuminated jewellery displays"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}