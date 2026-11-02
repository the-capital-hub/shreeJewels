import "./About.css";

const values = [
  {
    icon: "◇",
    title: "Certified Purity",
    detail: "BIS Hallmarked",
  },
  {
    icon: "♧",
    title: "Trusted by Generations",
    detail: "Built on trust",
  },
  {
    icon: "✧",
    title: "Exquisite Craftsmanship",
    detail: "Made with care",
  },
];
import image1 from '../../assets/about/image1.jpg'
import image2 from '../../assets/about/image2.jpg'
const stats = [
  { icon: "▦", value: "25+", label: "Years of Legacy" },
  { icon: "◇", value: "10,000+", label: "Happy Customers" },
  { icon: "♛", value: "5,000+", label: "Unique Designs" },
  { icon: "⌖", value: "1", label: "Store in Pune" },
];

const quickLinks = ["Home", "Collections", "About Us", "Contact"];
const collectionLinks = [
  "Gold Jewellery",
  "Diamond Jewellery",
  "Bridal Jewellery",
  "Platinum Jewellery",
  "Silver Jewellery",
  "Gemstone Jewellery",
];

export default function About() {
  return (
    <main className="sj-about">
      <section className="sj-about-hero">
        <div className="sj-about-hero-content">
          <p className="sj-about-kicker">About Us</p>
          <h1>
            The Story of
            <span>Shree Jewels</span>
          </h1>

          <div className="sj-about-ornament" aria-hidden="true">
            <span />
            <b>✿</b>
            <span />
          </div>

          <p className="sj-about-hero-copy">
            A legacy of trust, fine craftsmanship and
            <br className="sj-desktop-break" /> timeless elegance in jewellery.
          </p>
        </div>
      </section>

      <section className="sj-about-story">
        <div className="sj-about-store-image">
          <img
            src={image1}
            alt="Shree Jewels showroom"
          />
        </div>

        <div className="sj-about-story-copy">
          <p className="sj-about-section-kicker">Our Story</p>
          <h2>
            Tradition, Trust and
            <br /> Timeless Beauty
          </h2>
          <span className="sj-about-gold-rule" />

          <p className="sj-about-body">
            Shree Jewels is a family driven jewellery brand with a rich
            heritage of craftsmanship. For decades, we have been creating
            exquisite pieces that celebrate life's most precious moments with
            purity, artistry and elegance.
          </p>

          <div className="sj-about-values">
            {values.map((value) => (
              <article className="sj-about-value" key={value.title}>
                <span className="sj-about-value-icon" aria-hidden="true">
                  {value.icon}
                </span>
                <h3>{value.title}</h3>
                <p>{value.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-about-vision">
        <div className="sj-about-vision-title">
          <span />
          <h2>Our Vision</h2>
          <span />
        </div>
        <p>
          To be a preferred jewellery destination that blends Indian tradition
          <br className="sj-desktop-break" /> with contemporary elegance for
          every generation.
        </p>
      </section>

      <section className="sj-about-craft">
        <div className="sj-about-craft-copy">
          <h2>
            The Art Behind
            <span>Every Jewel</span>
          </h2>
          <span className="sj-about-gold-rule" />
          <p className="sj-about-body">
            From concept to creation, each piece at Shree Jewels is crafted
            with precision, passion and a deep respect for our traditional
            artistry.
          </p>
          <a className="sj-about-cta" href="/collections">
            Explore Our Collections <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="sj-about-craft-image">
          <img
            src={image2}
            alt="Jewellery artisan setting a gemstone"
          />
        </div>
      </section>

      <section className="sj-about-stats" aria-label="Shree Jewels facts">
        {stats.map((stat) => (
          <article className="sj-about-stat" key={stat.label}>
            <span className="sj-about-stat-icon" aria-hidden="true">
              {stat.icon}
            </span>
            <div>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          </article>
        ))}
      </section>

      {/* <footer className="sj-about-footer">
        <div className="sj-about-footer-main">
          <div className="sj-about-footer-brand">
            <div className="sj-about-lotus" aria-hidden="true">
              ✿
            </div>
            <h2>Shree Jewels</h2>
            <p>Where Tradition Meets<br />Timeless Elegance</p>

            <div className="sj-about-socials" aria-label="Social links">
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="WhatsApp">◉</a>
            </div>
          </div>

          <div className="sj-about-footer-column">
            <h3>Quick Links</h3>
            {quickLinks.map((link) => (
              <a
                href={
                  link === "Home"
                    ? "/"
                    : link === "About Us"
                    ? "/about"
                    : `/${link.toLowerCase()}`
                }
                key={link}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="sj-about-footer-column">
            <h3>Collections</h3>
            {collectionLinks.map((link) => (
              <a href="/collections" key={link}>
                {link}
              </a>
            ))}
          </div>

          <div className="sj-about-footer-column sj-about-contact">
            <h3>Visit Our Store</h3>
            <p>
              <span aria-hidden="true">⌖</span>
              Kantilal Chhotalal
              <br />
              Sinhagad Road, Pune
              <br />
              Maharashtra
            </p>
            <a href="tel:+919876543210">
              <span aria-hidden="true">♧</span> +91 98765 43210
            </a>
            <a href="mailto:info@shreejewels.in">
              <span aria-hidden="true">✉</span> info@shreejewels.in
            </a>
          </div>
        </div>

        <div className="sj-about-footer-bottom">
          © 2026 Shree Jewels. All Rights Reserved.
        </div>
      </footer> */}
    </main>
  );
}