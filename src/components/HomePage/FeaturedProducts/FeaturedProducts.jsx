import { useState } from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";
import image1 from '../../../assets/fearted/image1.png'
import image2 from '../../../assets/fearted/image2.png'
import image3 from '../../../assets/fearted/image3.png'
import image4 from '../../../assets/fearted/image4.png'
import image5 from '../../../assets/fearted/image5.png'
import image6 from '../../../assets/fearted/image6.png'
const products = [
  {
    id: 1,
    name: "Gold Filigree Pendant Necklace Set",
    price: "₹25,000",
    label: "Best Seller",
    image: image1,
  },
  {
    id: 2,
    name: "Diamond Elegance Necklace Set",
    price: "₹1,25,000",
    label: "New Arrival",
    image: image2,
  },
  {
    id: 3,
    name: "Gemstone Royal Necklace Set",
    price: "₹89,000",
    label: "Premium",
    image: image3,
  },
  {
    id: 4,
    name: "Bridal Heritage Necklace Set",
    price: "₹2,10,000",
    label: "Bridal Choice",
    image: image4,
  },
  {
    id: 5,
    name: "Pearl Heritage Necklace Set",
    price: "₹58,000",
    label: "Classic Choice",
    image: image5,
  },
  {
    id: 6,
    name: "Ruby Royale Necklace Set",
    price: "₹96,000",
    label: "Royal Edit",
    image: image6,
  },
];

const itemsPerPage = 4;

export default function FeaturedProducts() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const visibleProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const goToPage = (nextPage) => {
    setPage((nextPage + totalPages) % totalPages);
  };

  return (
    <section className="featured-section" aria-labelledby="featured-title">
      <div className="featured-container">
        <header className="featured-heading">
          <div className="featured-eyebrow">
            <span aria-hidden="true" />
            <p>Our Favourites</p>
            <span aria-hidden="true" />
          </div>

          <h2 id="featured-title">Featured Products</h2>

          <p className="featured-subtitle">
            A curated selection of our most loved designs, crafted with
            timeless elegance.
          </p>
        </header>

        <div className="featured-grid">
          {visibleProducts.map((product) => (
            <article className="featured-card" key={product.id}>
              <div className="featured-image-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="featured-image"
                  loading="lazy"
                />

                <span className="featured-badge">{product.label}</span>
              </div>

              <div className="featured-card-content">
                <h3>{product.name}</h3>
                <p className="featured-price">{product.price}</p>

                <Link
                  to={`/products/${product.id}`}
                  className="featured-button"
                >
                  View Details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="featured-controls" aria-label="Featured product pages">
            <button
              type="button"
              className="featured-arrow"
              onClick={() => goToPage(page - 1)}
              aria-label="Previous products"
            >
              ←
            </button>

            <div className="featured-dots">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`featured-dot ${page === index ? "active" : ""}`}
                  onClick={() => goToPage(index)}
                  aria-label={`Go to page ${index + 1}`}
                  aria-current={page === index ? "page" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="featured-arrow"
              onClick={() => goToPage(page + 1)}
              aria-label="Next products"
            >
              →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}