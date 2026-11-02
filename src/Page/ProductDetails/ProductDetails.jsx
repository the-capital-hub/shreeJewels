import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const demoProduct = {
  name: "Gold Filigree Pendant Necklace Set",
  category: "Gold Jewellery",
  sku: "SJ-MLJ-86",
  price: 25000,
  oldPrice: 28500,
  rating: 4.8,
  reviews: 24,
  description:
    "A beautifully crafted gold filigree necklace set that blends traditional artistry with timeless elegance. Perfect for weddings, festivals and special occasions.",
  images: [
    "/products/gold-filigree-pendant.jpg",
    "/products/gold-filigree-earrings.jpg",
    "/products/gold-filigree-detail.jpg",
    "/products/gold-filigree-chain.jpg",
  ],
};

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductDetails() {
  const { id } = useParams();

  const [product] = useState(demoProduct);
  const [selectedImage, setSelectedImage] = useState(0);
  const [metal, setMetal] = useState("22K Gold");
  const [weight, setWeight] = useState("Approx 24.5 g");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = () => {
    const cartItem = {
      productId: id || product.sku,
      name: product.name,
      price: product.price,
      quantity,
      metal,
      weight,
    };

    const currentCart = JSON.parse(localStorage.getItem("shreeCart") || "[]");
    const updatedCart = [...currentCart, cartItem];

    localStorage.setItem("shreeCart", JSON.stringify(updatedCart));
    setCartMessage("Added to cart");
  };

  return (
    <main className="product-details-page">
      <div className="product-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/collections">Collections</a>
        <span>›</span>
        <span>{product.category}</span>
        <span>›</span>
        <strong>{product.name}</strong>
      </div>

      <section className="product-main">
        <div className="product-gallery">
          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <button
                type="button"
                className={selectedImage === index ? "active" : ""}
                key={image}
                onClick={() => setSelectedImage(index)}
                aria-label={`View product image ${index + 1}`}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className="product-main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>

          <div className="product-meta">
            <span>SKU: {product.sku}</span>
            <span className="product-stock">In Stock</span>
            <span className="product-rating">
              <span aria-label={`${product.rating} out of 5 stars`}>★★★★★</span>
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="product-pricing">
            <strong>{formatPrice(product.price)}</strong>
            <del>{formatPrice(product.oldPrice)}</del>
            <span>12% Off</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-options">
            <div>
              <p className="product-option-label">Metal</p>
              <div className="metal-options">
                {["22K Gold", "18K Gold"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={metal === item ? "selected" : ""}
                    onClick={() => setMetal(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="product-option-label" htmlFor="product-weight">
                Weight
              </label>
              <select
                id="product-weight"
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
              >
                <option>Approx 24.5 g</option>
                <option>Approx 25 g</option>
                <option>Approx 26 g</option>
              </select>
            </div>
          </div>

          <p className="product-option-label">Quantity</p>
          <div className="product-buy-row">
            <div className="quantity-control">
              <button
                type="button"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((current) => current + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button type="button" className="add-to-cart" onClick={addToCart}>
              <span aria-hidden="true">🛒</span>
              Add to Cart
            </button>

            <button
              type="button"
              className={`add-to-wishlist ${isWishlisted ? "saved" : ""}`}
              onClick={() => setIsWishlisted((current) => !current)}
            >
              <span aria-hidden="true">{isWishlisted ? "♥" : "♡"}</span>
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>

          {cartMessage && <p className="cart-message">{cartMessage}</p>}

          <div className="product-benefits">
            <div>
              <strong>Free Shipping</strong>
              <span>Across India</span>
            </div>
            <div>
              <strong>BIS Hallmarked</strong>
              <span>Certified Purity</span>
            </div>
            <div>
              <strong>Easy Returns</strong>
              <span>Within 7 Days</span>
            </div>
            <div>
              <strong>Secure Payment</strong>
              <span>Multiple Options</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-tabs">
        <div className="product-tab-buttons" role="tablist">
          {["Description", "Product Details", "Care Guide", "Reviews (24)"].map(
            (tab) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                className={activeTab === tab ? "active" : ""}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>

        <div className="product-tab-content">
          {activeTab === "Description" && (
            <p>
              This exquisite gold filigree pendant necklace set showcases fine
              handcrafted detailing with a rich traditional appeal. The
              intricate floral patterns, studded with ruby accents, add a
              touch of royal elegance, making it an ideal choice for weddings,
              festivals and grand celebrations.
            </p>
          )}

          {activeTab === "Product Details" && (
            <ul>
              <li>Metal: {metal}</li>
              <li>Weight: {weight}</li>
              <li>SKU: {product.sku}</li>
              <li>Category: {product.category}</li>
            </ul>
          )}

          {activeTab === "Care Guide" && (
            <p>
              Store jewellery in a dry, soft-lined box. Avoid direct contact
              with perfume, chemicals and moisture. Clean gently with a soft
              jewellery cloth.
            </p>
          )}

          {activeTab === "Reviews (24)" && (
            <p>
              Customer reviews will appear here once connected to your reviews
              data.
            </p>
          )}
        </div>
      </section>

      <section className="product-recommendations">
        <h2>You May Also Like</h2>
        <p>Recommended jewellery will appear here.</p>
      </section>
    </main>
  );
}