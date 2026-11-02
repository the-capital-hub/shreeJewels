import React from "react";
import "./Category.css";
import categoryGold from '../../../assets/menu/category-gold.jpg'
import categoryDiamond from '../../../assets/menu/category-diamond.jpg'
import categoryBridal from '../../../assets/menu/category-bridal.jpg'
import categoryPlatinum from '../../../assets/menu/category-platinum.jpg'
import categorySilver from '../../../assets/menu/category-silver.jpg'
// import categorySilver from '../../../assets/menu/category-silver.jpg'
import categoryGemstone from '../../../assets/menu/category-gemstone.jpg'

const categories = [
  {
    title: "Gold Jewellery",
    description: "Timeless designs for every celebration",
    image: categoryGold,
    slug: "gold-jewellery",
  },
  {
    title: "Diamond Jewellery",
    description: "Brilliance that lasts a lifetime",
    image: categoryDiamond,
    slug: "diamond-jewellery",
  },
  {
    title: "Bridal Jewellery",
    description: "Exquisite pieces for your special day",
    image:categoryBridal,
    slug: "bridal-jewellery",
  },
  {
    title: "Platinum Jewellery",
    description: "Modern elegance with lasting strength",
    image: categoryPlatinum,
    slug: "platinum-jewellery",
  },
  {
    title: "Silver Jewellery",
    description: "Traditional charm with a modern touch",
    image: categorySilver,
    slug: "silver-jewellery",
  },
  {
    title: "Gemstone Jewellery",
    description: "Vibrant stones for a unique statement",
    image: categoryGemstone,
    slug: "gemstone-jewellery",
  },
];

export default function Category() {
  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-heading">
  <div className="category-eyebrow">
    <span className="category-heading-line" />
    <span>OUR COLLECTIONS</span>
    <span className="category-heading-line" />
  </div>

  <h2>Shop by Category</h2>

  <p>
    Explore our exclusive range of fine jewellery, crafted for every
    occasion and style.
  </p>
</div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.slug}>
              <div className="category-image-wrap">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                  loading="lazy"
                />
                <div className="category-image-shade" />
              </div>

              <div className="category-card-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <a
                  className="category-link"
                  href={`/collections/${category.slug}`}
                  aria-label={`Explore ${category.title}`}
                >
                  Explore Collection <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}