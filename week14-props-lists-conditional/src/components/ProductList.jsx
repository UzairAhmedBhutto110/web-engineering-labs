
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return (
      <p className="empty">
        No products match your selection.
      </p>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
