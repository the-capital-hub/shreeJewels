import React from "react";
import "./Contact.css";
import image2 from '../../assets/contact/image2.png'

const contactDetails = [
  {
    icon: "⌖",
    title: "Store Address",
    lines: ["Kantilal Chhotalal", "Sinhagad Road, Pune", "Maharashtra"],
  },
  {
    icon: "☎",
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 98500 11223"],
  },
  {
    icon: "✉",
    title: "Email Us",
    lines: ["care@shreejewels.in", "support@shreejewels.in"],
  },
  {
    icon: "◷",
    title: "Store Timings",
    lines: ["Mon to Sat", "10:30 AM to 8:30 PM", "Sunday", "11:00 AM to 7:00 PM"],
  },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${
        data.get("phone") || "Not provided"
      }\n\nMessage:\n${data.get("message")}`
    );

    window.location.href = `mailto:care@shreejewels.in?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1>
            Contact <em>Us</em>
          </h1>

          <div className="contact-flourish" aria-hidden="true">
            <span />
            <b>✿</b>
            <span />
          </div>

          <p>
            We are here to assist you with your jewellery queries, store
            visits, custom designs, and personalised appointments.
          </p>
        </div>
      </section>

      <section className="contact-details" aria-label="Contact information">
        {contactDetails.map((item) => (
          <article className="contact-detail" key={item.title}>
            <span className="contact-detail__icon" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <h2>{item.title}</h2>
              {item.lines.map((line, index) => (
                <p key={`${item.title}-${index}`}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="contact-main">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <div className="contact-short-line" />

          <div className="contact-form__grid">
            <label>
              Full Name <span>*</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </label>

            <label>
              Email Address <span>*</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </label>

            <label>
              Subject
              <select name="subject" defaultValue="General Enquiry">
                <option>General Enquiry</option>
                <option>Jewellery Enquiry</option>
                <option>Custom Design</option>
                <option>Store Visit</option>
                <option>Appointment</option>
              </select>
            </label>

            <label className="contact-form__message">
              Your Message <span>*</span>
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows="4"
                required
              />
            </label>
          </div>

          <button className="contact-submit" type="submit">
            Send Message <span aria-hidden="true">➤</span>
          </button>
        </form>

        <div className="contact-showroom">
          <img
            src={image2}
            alt="Shree Jewels showroom interior"
            loading="lazy"
          />
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__details">
          <h2>Find Us on Map</h2>
          <div className="contact-map__address">
            <span aria-hidden="true">⌖</span>
            <p>
              <strong>Kantilal Chhotalal</strong>
              <br />
              Sinhagad Road, Pune
              <br />
              Maharashtra
            </p>
          </div>

          <a
            className="contact-map__button"
            href="https://www.google.com/maps/search/?api=1&query=Kantilal+Chhotalal+Sinhagad+Road+Pune"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-map__embed">
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