import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [imgFailed, setImgFailed] = useState(false);

  const initials = product.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <article className="product-card frame">
      <span className="frame-tr" />
      <span className="frame-bl" />

      <div className="product-card__media">
        {!imgFailed ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="product-card__placeholder blueprint-grid--light"
            aria-hidden="true"
          >
            <span className="product-card__placeholder-initials">
              {initials}
            </span>

            <span className="product-card__placeholder-text">
              Image Placeholder
            </span>
          </div>
        )}

        <span className="product-card__category">
          {product.category}
        </span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">
          {product.name}
        </h3>

        <p className="product-card__desc">
          {product.description}
        </p>

        <div className="product-card__footer">
          <a
            className="btn btn-outline--dark product-card__cta"
            href={`#contact?product=${encodeURIComponent(product.name)}`}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;