import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./CustomerReviews.css";
import image1 from '../../../assets/review/review-jewellery-necklace.jpg'
import image2 from '../../../assets/review/review-jewellery-rings.jpg'
import image3 from '../../../assets/review/review-jewellery-earrings.jpg'
const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    review:
      "The design and quality are absolutely stunning. The finish is elegant and perfect for special occasions.",
    productImage: image1,
    productAlt: "Gold necklace",
  },
  {
    name: "Rohit Verma",
    rating: 5,
    review:
      "Excellent craftsmanship and a great buying experience. The jewellery was exactly as shown on the website.",
    productImage: image2,
    productAlt: "Gold rings",
  },
  {
    name: "Neha Gupta",
    rating: 5,
    review:
      "Beautiful collection and reliable service. Delivery was on time and the packaging was premium.",
    productImage: image3,
    productAlt: "Gold earrings",
  },
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="customer-reviews">
      <div className="customer-reviews__overlay" />

      <div className="customer-reviews__content">
        <div className="customer-reviews__eyebrow">
          <span />
          <p>Customer Reviews</p>
          <span />
        </div>

        <h2>Loved by Our Customers</h2>

        <p className="customer-reviews__intro">
          Hear from our valued customers who have made Shree Jewels a part
          of their special moments.
        </p>

        <div className="customer-reviews__carousel">
          <button
            className="customer-reviews__arrow customer-reviews__arrow--prev"
            type="button"
            onClick={showPrevious}
            aria-label="Previous review"
          >
            <FiChevronLeft />
          </button>

          <div className="customer-reviews__grid">
            {reviews.map((review, index) => (
              <article
                className={`customer-review-card ${
                  index === activeIndex ? "is-active" : ""
                }`}
                key={review.name}
              >
                <div className="customer-review-card__top">
                  <div className="customer-review-card__avatar">
                    {review.name.charAt(0)}
                  </div>

                  <div className="customer-review-card__customer">
                    <h3>{review.name}</h3>
                    <div
                      className="customer-review-card__stars"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {"★".repeat(review.rating)}
                    </div>
                  </div>
                </div>

                <blockquote className="customer-review-card__quote">
                  “{review.review}”
                </blockquote>

                <img
                  className="customer-review-card__product"
                  src={review.productImage}
                  alt={review.productAlt}
                  loading="lazy"
                />
              </article>
            ))}
          </div>

          <button
            className="customer-reviews__arrow customer-reviews__arrow--next"
            type="button"
            onClick={showNext}
            aria-label="Next review"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="customer-reviews__dots" aria-label="Review slides">
          {reviews.map((review, index) => (
            <button
              key={review.name}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show review ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}