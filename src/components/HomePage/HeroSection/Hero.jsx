import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Hero.css'
import image1 from '../../../assets/hero/image1.jpg'
import image2 from '../../../assets/hero/image2.png'
import image4 from '../../../assets/hero/image4.png'
const slides = [
  {
    eyebrow: 'FINE JEWELLERY',
    title: <>Every Jewel Tells<br />a <em>Beautiful Story</em></>,
    description:
      "Exquisite gold, diamond and precious gemstone jewellery crafted to celebrate life's most special moments.",
    image: image1,
    imageAlt: 'Bridal jewellery with gold and ruby details',
    primaryLabel: 'Explore Collections',
    primaryTo: '/collections',
    secondaryLabel: 'Book an Appointment',
    secondaryTo: '/contact',
  },
  {
    eyebrow: 'TIMELESS CRAFTSMANSHIP',
    title: <>Made to Be<br /><em>Treasured Forever</em></>,
    description:
      'Discover considered designs, crafted with care for the moments you will always remember.',
    image: image2,
    imageAlt: 'Jewellery being carefully crafted by hand',
    primaryLabel: 'Discover Our Story',
    primaryTo: '/about',
    secondaryLabel: 'Explore Jewellery',
    secondaryTo: '/shop',
  },
  {
    eyebrow: 'A MOMENT OF ELEGANCE',
    title: <>Find Your<br /><em>Signature Sparkle</em></>,
    description:
      'From everyday elegance to unforgettable occasions, find a piece that feels unmistakably yours.',
    image: image4,
    imageAlt: 'Elegant diamond jewellery in warm studio lighting',
    primaryLabel: 'Shop Jewellery',
    primaryTo: '/shop',
    secondaryLabel: 'View Collections',
    secondaryTo: '/collections',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]

  const showPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  return (
    <section className="hero" aria-label="Featured jewellery">
      <div className="hero-copy" key={`copy-${activeSlide}`}>
        <p className="hero-eyebrow">
          <span>{slide.eyebrow}</span>
          <i aria-hidden="true" />
        </p>

        <h1>{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>

        <div className="hero-buttons">
          <Link className="hero-button hero-button-primary" to={slide.primaryTo}>
            {slide.primaryLabel}
            <ArrowRight aria-hidden="true" />
          </Link>

          <Link className="hero-button hero-button-secondary" to={slide.secondaryTo}>
            {slide.secondaryLabel}
          </Link>
        </div>

        <div className="hero-pagination" aria-label="Choose a hero slide">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              className={index === activeSlide ? 'is-active' : ''}
              aria-label={`Show slide ${index + 1}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.imageAlt}
          className="hero-image"
        />

        <div className="hero-controls">
          <span className="hero-slide-count">
            0{activeSlide + 1} <i /> 0{slides.length}
          </span>

          <button type="button" onClick={showPrevious} aria-label="Previous slide">
            <ChevronLeft aria-hidden="true" />
          </button>

          <button type="button" onClick={showNext} aria-label="Next slide">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero