import React from "react";
import "./CustomJewellery.css";
import leaf from '../../assets/custom/leaf-decoration.png'
const steps = [
  {
    number: "1.",
    title: "Share Your Idea",
    text: "Tell us your design, inspiration or occasion.",
    icon: "✉",
  },
  {
    number: "2.",
    title: "Design & Preview",
    text: "Our experts create a design and share a preview with you.",
    icon: "♢",
  },
  {
    number: "3.",
    title: "Craft with Care",
    text: "Your jewellery is handcrafted with precision and purity.",
    icon: "⚒",
  },
  {
    number: "4.",
    title: "Receive Your Piece",
    text: "Get your custom jewellery delivered with care.",
    icon: "♧",
  },
];

const categories = [
  { title: "Rings", image: "/images/04_ring.jpg" },
  { title: "Necklaces", image: "/images/05_necklace.jpg" },
  { title: "Earrings", image: "/images/06_earrings.jpg" },
  { title: "Bangles", image: "/images/07_bangle.jpg" },
  { title: "Bridal Sets", image: "/images/08_bridal_set.jpg" },
  { title: "Pendants", image: "/images/09_pendant.jpg" },
];

const benefits = [
  "Personalised Designs",
  "Expert Craftsmanship",
  "Certified Purity",
  "Design Guidance at Every Step",
];

export default function CustomJewellery() {
  return (
    <main className="custom-page">
      <section className="cj-hero">
        <div className="cj-hero__content">
          <span className="cj-label">Custom Jewellery</span>
          <h1>
            Bring Your
            <em>Dream Design</em>
            to Life
          </h1>

          <div className="cj-flourish" aria-hidden="true">
            <span />
            <b>✿</b>
            <span />
          </div>

          <p>
            A personalised jewellery experience crafted around your style,
            story and special moments.
          </p>

          <a className="cj-button" href="#customise">
            Start Your Custom Design <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="cj-how">
        <div className="cj-heading cj-heading--light">
          <h2>How It Works</h2>
          <p>A simple and personalised process to create your unique piece.</p>
        </div>

        <div className="cj-steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <article className="cj-step">
                <div className="cj-step__icon" aria-hidden="true">
                  {step.icon}
                </div>
                <h3>
                  <span>{step.number}</span> {step.title}
                </h3>
                <p>{step.text}</p>
              </article>

              {index < steps.length - 1 && (
                <span className="cj-step__arrow" aria-hidden="true">
                  »
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="cj-design">
        <div className="cj-design__image">
          <img
            src="/images/05_necklace.jpg"
            alt="Gold and ruby necklace on burgundy velvet"
            loading="lazy"
          />
        </div>

        <div className="cj-design__content">
          <span className="cj-label">Endless Possibilities</span>
          <h2>
            Design Your
            <br />
            Own Jewellery
          </h2>
          <div className="cj-short-line" />
          <p>
            From engagement rings to bridal sets and meaningful gifts, we turn
            your vision into exquisite jewellery that is truly one of a kind.
          </p>

          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <span aria-hidden="true">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <img
          className="cj-design__leaf"
          src={leaf}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </section>

      <section className="cj-categories" id="customise">
        <div className="cj-heading cj-heading--dark">
          <h2>You Can Customise</h2>
        </div>

        <div className="cj-category-grid">
          {categories.map((category) => (
            <a
              className="cj-category"
              href="/contact"
              key={category.title}
            >
              <div className="cj-category__image">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />
              </div>
              <h3>{category.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="cj-cta">
        <div className="cj-cta__content">
          <h2>
            Let’s Create Something <em>Unique Together</em>
          </h2>
          <p>
            Share your idea with our design experts and get a personalised
            quotation.
          </p>
          <a className="cj-button" href="/contact">
            Get a Custom Quote <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}