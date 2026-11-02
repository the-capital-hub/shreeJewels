import React from "react";
import {
  FiAward,
  FiTruck,
  FiRefreshCw,
  FiCheckCircle,
} from "react-icons/fi";
import "./WhyChoose.css";

const reasons = [
  {
    icon: <FiAward />,
    title: "Certified Quality",
    description: "Hallmarked and authentic jewellery",
  },
  {
    icon: <FiCheckCircle />,
    title: "Expert Craftsmanship",
    description: "Intricate designs by skilled artisans",
  },
  {
    icon: <FiTruck />,
    title: "Secure Delivery",
    description: "Safe, insured and on time delivery",
  },
  {
    icon: <FiRefreshCw />,
    title: "Easy Returns",
    description: "Hassle free returns and exchange",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose__overlay" />

      <div className="why-choose__content">
        <div className="why-choose__eyebrow">
          <span />
          <p>Why Choose Shree Jewels</p>
          <span />
        </div>

        <h2>A Name You Can Trust</h2>

        <div className="why-choose__ornament" aria-hidden="true">
          ◆
        </div>

        <p className="why-choose__intro">
          From certified quality to a seamless buying experience, we are
          committed to giving you jewellery that you will cherish for a
          lifetime.
        </p>

        <div className="why-choose__grid">
          {reasons.map((reason) => (
            <article className="why-choose__item" key={reason.title}>
              <div className="why-choose__icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}