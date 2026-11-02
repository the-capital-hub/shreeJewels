import React from "react";
import { GiLotus } from "react-icons/gi";
import { FiAward } from "react-icons/fi";
import "./BrandStory.css";
import image from '../../../assets/brand.png'
import { TbFileInfinity } from "react-icons/tb";
const highlights = [
  {
    icon: <GiLotus />,
    title: "Heritage",
    subtitle: "Craftsmanship",
  },
  {
    icon: <FiAward />,
    title: "Certified",
    subtitle: "Quality",
  },
  {
    icon: <TbFileInfinity/> ,
    title: "Timeless",
    subtitle: "Designs",
  },
];

export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story__image">
        <img
          src={image}
          alt="Jeweller carefully crafting an intricate gold ornament"
          loading="lazy"
        />
      </div>

      <div className="brand-story__content">
        <div className="brand-story__eyebrow">
          <span />
          <p>Our Brand Story</p>
          <span />
        </div>

        <h2>The Legacy of Shree Jewels</h2>
        <div className="brand-story__ornament" aria-hidden="true">
          ◆
        </div>

        <p className="brand-story__description">
          At Shree Jewels, we believe jewellery is more than an ornament.
          It is a part of your story. Our designs bring together the beauty
          of traditional craftsmanship and timeless elegance.
        </p>

        <div className="brand-story__highlights">
          {highlights.map((item) => (
            <div className="brand-story__highlight" key={item.title}>
              <span className="brand-story__icon">{item.icon}</span>
              <p>
                {item.title}
                <br />
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}