import React from "react";
import "./VisitStore.css";
import image2 from '../../assets/store/iamge2.png'
const storeInfo = [
  {
    icon: "⌖",
    title: "Store Location",
    content: (
      <>
        Kantilal Chhotalal
        <br />
        Sinhagad Road, Pune
        <br />
        Maharashtra
      </>
    ),
  },
  {
    icon: "☎",
    title: "Call Us",
    content: (
      <>
        +91 98765 43210
        <br />
        +91 98500 11223
      </>
    ),
  },
  {
    icon: "◷",
    title: "Store Timings",
    content: (
      <>
        Mon to Sat
        <br />
        10:30 AM to 8:30 PM
        <br />
        <strong>Sunday</strong>
        <br />
        11:00 AM to 7:00 PM
      </>
    ),
  },
];

const storeBenefits = [
  "Explore Exclusive Collections",
  "Get Expert Jewellery Guidance",
  "Custom Design Consultation",
  "In Store Experience and Assistance",
];

export default function VisitStore() {
  return (
    <main className="visit-store">
      <section className="vs-hero">
        <div className="vs-hero__content">
          <h1>
            Visit <em>Our Store</em>
          </h1>

          <div className="vs-flourish" aria-hidden="true">
            <span />
            <b>✿</b>
            <span />
          </div>

          <p>
            Experience our exclusive jewellery collections in person, get
            expert guidance, and create your perfect piece with us.
          </p>

          <a
            className="vs-button"
            href="https://www.google.com/maps/search/?api=1&query=Kantilal+Chhotalal+Sinhagad+Road+Pune"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="vs-info">
        {storeInfo.map((item) => (
          <article className="vs-info__item" key={item.title}>
            <span className="vs-info__icon" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </article>
        ))}

        <article className="vs-info__item">
          <span className="vs-info__icon" aria-hidden="true">
            ▦
          </span>
          <div>
            <h2>Book a Visit</h2>
            <p>Schedule a personalised consultation with our jewellery experts.</p>
            <a className="vs-book-button" href="/contact">
              Book Appointment <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </section>

      <section className="vs-welcome">
        <div className="vs-welcome__image">
          <img
            src={image2}
            alt="Inside the Shree Jewels showroom"
            loading="lazy"
          />
        </div>

        <div className="vs-welcome__content">
          <span className="vs-label">OUR STORE</span>
          <h2>A Warm Welcome Awaits</h2>
          <div className="vs-short-line" />

          <p>
            Visit our store to explore a wide range of gold, diamond, platinum,
            silver, and gemstone jewellery in a luxurious and comfortable
            setting.
          </p>

          <ul>
            {storeBenefits.map((benefit) => (
              <li key={benefit}>
                <span aria-hidden="true">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          <img
            className="vs-leaf-decoration"
            src="/images/03_leaf_decoration.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </section>

      <section className="vs-map">
        <div className="vs-map__details">
          <h2>Find Us on Map</h2>
          <div className="vs-map__address">
            <span aria-hidden="true">⌖</span>
            <p>
              <strong>Kantilal Chhotalal</strong>
              <br />
              Sinhagad Road, Pune | Maharashtra
            </p>
          </div>

          <a
            className="vs-map-button"
            href="https://www.google.com/maps/search/?api=1&query=Kantilal+Chhotalal+Sinhagad+Road+Pune"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="vs-map__embed">
          <iframe
            title="Map showing Shree Jewels on Sinhagad Road, Pune"
            src="https://www.google.com/maps?q=Kantilal%20Chhotalal%20Sinhagad%20Road%20Pune&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}