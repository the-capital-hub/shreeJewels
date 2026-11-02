import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const initialItems = [
  {
    id: 1,
    name: "Gold Filigree Pendant Necklace Set",
    category: "Gold Jewellery",
    price: 25000,
    quantity: 1,
    image: "/images/gold-pendant.jpg",
  },
  {
    id: 2,
    name: "Ruby Drop Earrings",
    category: "Diamond Jewellery",
    price: 12500,
    quantity: 1,
    image: "/images/ruby-earrings.jpg",
  },
];

const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export default function Cart() {
  const [items, setItems] = useState(initialItems);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = appliedCoupon ? Math.round(subtotal * 0.05) : 0;
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal - discount + shipping;

  const updateQuantity = (id, change) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const applyCoupon = (event) => {
    event.preventDefault();
    setAppliedCoupon(coupon.trim().toUpperCase() === "WELCOME5");
  };

  return (
    <main className="sj-cart">
      <header className="sj-cart__hero">
        <p className="sj-cart__eyebrow">Your Selection</p>
        <h1>
          Shopping <em>Bag</em>
        </h1>
        <p>Beautiful pieces, thoughtfully chosen.</p>
      </header>

      <div className="sj-cart__content">
        <section className="sj-cart__items">
          <div className="sj-cart__section-heading">
            <h2>Your Cart</h2>
            <span>{items.length} {items.length === 1 ? "item" : "items"}</span>
          </div>

          {items.length === 0 ? (
            <div className="sj-cart__empty">
              <span aria-hidden="true">♡</span>
              <h2>Your bag is waiting</h2>
              <p>Discover jewellery made for your special moments.</p>
              <Link to="/collections" className="sj-cart__continue">
                Explore Collections
              </Link>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <article className="sj-cart__item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="sj-cart__item-info">
                    <p className="sj-cart__category">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p className="sj-cart__price">{formatPrice(item.price)}</p>

                    <div className="sj-cart__item-actions">
                      <div className="sj-cart__quantity" aria-label="Quantity">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="sj-cart__remove"
                        type="button"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <strong className="sj-cart__line-total">
                    {formatPrice(item.price * item.quantity)}
                  </strong>
                </article>
              ))}

              <Link to="/collections" className="sj-cart__continue-shopping">
                <span aria-hidden="true">←</span> Continue Shopping
              </Link>
            </>
          )}
        </section>

        <aside className="sj-cart__summary">
          <h2>Order Summary</h2>

          <form className="sj-cart__coupon" onSubmit={applyCoupon}>
            <label htmlFor="cart-coupon">Have a coupon?</label>
            <div>
              <input
                id="cart-coupon"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
                placeholder="Enter code"
              />
              <button type="submit">Apply</button>
            </div>
            {appliedCoupon && (
              <p className="sj-cart__coupon-success">WELCOME5 applied</p>
            )}
            {coupon.trim() && !appliedCoupon && coupon.trim().toUpperCase() !== "WELCOME5" && (
              <p className="sj-cart__coupon-error">Enter a valid coupon code.</p>
            )}
          </form>

          <div className="sj-cart__totals">
            <div>
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <div>
              <span>Shipping</span>
              <strong>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</strong>
            </div>
            {discount > 0 && (
              <div>
                <span>Discount</span>
                <strong>−{formatPrice(discount)}</strong>
              </div>
            )}
          </div>

          <div className="sj-cart__grand-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>

          <Link
            to="/checkout"
            className={`sj-cart__checkout ${items.length === 0 ? "is-disabled" : ""}`}
            aria-disabled={items.length === 0}
            onClick={(event) => {
              if (items.length === 0) event.preventDefault();
            }}
          >
            Proceed to Checkout <span aria-hidden="true">→</span>
          </Link>

          <p className="sj-cart__secure">
            <span aria-hidden="true">♢</span>
            Secure checkout and trusted payments
          </p>
        </aside>
      </div>
    </main>
  );
}