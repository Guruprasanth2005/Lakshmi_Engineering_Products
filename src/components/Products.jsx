import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import "./Products.css";

function Products() {
  return (
    <section id="products" className="section section--bg products">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Catalogue</span>

          <h2>Our Products</h2>

          <p className="section-lede">
            A snapshot of our engineering component range of 30 products.
          </p>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;