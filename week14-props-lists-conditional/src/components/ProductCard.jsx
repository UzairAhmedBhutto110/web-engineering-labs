
function ProductCard({
  id,
  title,
  price,
  image,
  inStock,
  rating,
  onAddToCart,
}) {
  return (
    <article className="product-card">
      <img src={image} alt={title} />

      <div className="product-info">
        <h3>{title}</h3>

        <p className="rating">⭐ {rating}/5</p>

        <h4>Rs. {price.toLocaleString()}</h4>

        {price > 10000 && (
          <span className="delivery">Free Delivery</span>
        )}

        <p className={inStock ? "stock" : "sold-out"}>
          {inStock ? "In Stock" : "Sold Out"}
        </p>

        <button
          type="button"
          disabled={!inStock}
          onClick={() => onAddToCart(id, title)}
        >
          {inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
