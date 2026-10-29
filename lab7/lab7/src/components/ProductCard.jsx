
import styles from './ProductCard.module.css';

function ProductCard() {
  const product = {
    title: 'Mechanical Keyboard',
    price: 12500,
    inStock: true,
  };

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{product.title}</h3>

      <p className={styles.price}>
        Rs. {product.price.toLocaleString()}
      </p>

      <p className={product.inStock ? styles.status : styles.unavailable}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      <button className={styles.button} type="button">
        View Product
      </button>
    </article>
  );
}

export default ProductCard;
