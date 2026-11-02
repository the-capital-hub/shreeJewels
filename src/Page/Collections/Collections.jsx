import { useMemo, useState } from "react";
import "./Collections.css";

const products = [
  {
    id: 1,
    name: "Gold Filigree Pendant Necklace Set",
    category: "Gold Jewellery",
    price: 25000,
    image: "/products/gold-filigree-pendant.jpg",
  },
  {
    id: 2,
    name: "Ruby Drop Earrings",
    category: "Gold Jewellery",
    price: 48500,
    image: "/products/ruby-drop-earrings.jpg",
  },
  {
    id: 3,
    name: "Pearl Gold Necklace",
    category: "Gold Jewellery",
    price: 98500,
    oldPrice: 109000,
    image: "/products/pearl-gold-necklace.jpg",
  },
  {
    id: 4,
    name: "Diamond Halo Pendant",
    category: "Diamond Jewellery",
    price: 63500,
    image: "/products/diamond-halo-pendant.jpg",
  },
  {
    id: 5,
    name: "Diamond Tennis Bracelet",
    category: "Diamond Jewellery",
    price: 142000,
    oldPrice: 158000,
    image: "/products/diamond-tennis-bracelet.jpg",
  },
  {
    id: 6,
    name: "Diamond Stud Earrings",
    category: "Diamond Jewellery",
    price: 32900,
    image: "/products/diamond-stud-earrings.jpg",
  },
  {
    id: 7,
    name: "Kundan Bridal Earrings",
    category: "Bridal Jewellery",
    price: 89500,
    image: "/products/kundan-bridal-earrings.jpg",
  },
  {
    id: 8,
    name: "Bridal Rani Haar",
    category: "Bridal Jewellery",
    price: 245000,
    image: "/products/bridal-rani-haar.jpg",
  },
  {
    id: 9,
    name: "Platinum Solitaire Ring",
    category: "Platinum Jewellery",
    price: 76500,
    image: "/products/platinum-solitaire-ring.jpg",
  },
  {
    id: 10,
    name: "Silver Floral Anklet",
    category: "Silver Jewellery",
    price: 8500,
    image: "/products/silver-floral-anklet.jpg",
  },
];

const categories = [
  "All categories",
  "Gold Jewellery",
  "Diamond Jewellery",
  "Bridal Jewellery",
  "Platinum Jewellery",
  "Silver Jewellery",
  "Gemstone Jewellery",
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Collections() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All categories");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const pageSize = 8;

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All categories" || product.category === category;

      const matchesMin =
        minPrice === "" || product.price >= Number(minPrice);

      const matchesMax =
        maxPrice === "" || product.price <= Number(maxPrice);

      return matchesSearch && matchesCategory && matchesMin && matchesMax;
    });

    if (sort === "priceLow") result.sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [search, category, minPrice, maxPrice, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const resetFilters = () => {
    setSearch("");
    setCategory("All categories");
    setMinPrice("");
    setMaxPrice("");
    setSort("newest");
    setPage(1);
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((productId) => productId !== id)
        : [...current, id]
    );
  };

  return (
    <main className="collections-page">
      <section className="collections-hero">
        <div className="collections-hero-content">
          <p className="collections-eyebrow">SHREE JEWELS</p>
          <h1>Explore Our Collections</h1>
          <p>
            Discover jewellery crafted to celebrate your style and special
            moments.
          </p>
        </div>
      </section>

      <div className="collections-layout">
        <aside
          className={`collections-sidebar ${
            mobileFiltersOpen ? "is-open" : ""
          }`}
        >
          <div className="filter-heading">
            <h2>Filters</h2>
            <button type="button" onClick={resetFilters}>
              Reset
            </button>
          </div>

          <label className="filter-label" htmlFor="collection-search">
            Search
          </label>
          <input
            id="collection-search"
            className="filter-control"
            type="search"
            placeholder="Search jewellery"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          />

          <label className="filter-label" htmlFor="collection-category">
            Category
          </label>
          <select
            id="collection-category"
            className="filter-control"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setPage(1);
            }}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <p className="filter-label">Price range</p>
          <div className="price-fields">
            <input
              className="filter-control"
              type="number"
              min="0"
              placeholder="Min ₹"
              value={minPrice}
              onChange={(event) => {
                setMinPrice(event.target.value);
                setPage(1);
              }}
            />
            <input
              className="filter-control"
              type="number"
              min="0"
              placeholder="Max ₹"
              value={maxPrice}
              onChange={(event) => {
                setMaxPrice(event.target.value);
                setPage(1);
              }}
            />
          </div>
        </aside>

        <section className="collections-results">
          <div className="collections-toolbar">
            <p>
              <strong>{filteredProducts.length}</strong> products
            </p>

            <button
              type="button"
              className="mobile-filter-button"
              onClick={() => setMobileFiltersOpen((open) => !open)}
            >
              {mobileFiltersOpen ? "Hide filters" : "Show filters"}
            </button>

            <label className="sort-control">
              <span>Sort by</span>
              <select
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value);
                  setPage(1);
                }}
              >
                <option value="newest">Newest</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="collections-grid">
              {visibleProducts.map((product) => (
                <article className="collection-card" key={product.id}>
                  <div className="collection-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <button
                      type="button"
                      className={`wishlist-button ${
                        wishlist.includes(product.id) ? "is-saved" : ""
                      }`}
                      aria-label={
                        wishlist.includes(product.id)
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                      aria-pressed={wishlist.includes(product.id)}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      {wishlist.includes(product.id) ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="collection-card-info">
                    <p className="collection-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <div className="collection-price-row">
                      <p className="collection-price">
                        {formatPrice(product.price)}
                      </p>
                      {product.oldPrice && (
                        <p className="collection-old-price">
                          {formatPrice(product.oldPrice)}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="collections-empty">
              <h2>No jewellery found</h2>
              <p>Try changing your search or filters.</p>
              <button type="button" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}

          {filteredProducts.length > pageSize && (
            <nav className="collections-pagination" aria-label="Pagination">
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((current) => current - 1)}
              >
                Previous
              </button>

              <span>
                Page {page} of {totalPages}
              </span>

              <button
                type="button"
                disabled={page === totalPages}
                onClick={() => setPage((current) => current + 1)}
              >
                Next
              </button>
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}