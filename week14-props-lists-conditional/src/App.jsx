
import { useState } from "react";
import "./App.css";

import { products } from "./data/products";
import { testimonials } from "./data/testimonials";

import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import Button from "./components/Button";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  const [category, setCategory] = useState("all");
  const [showEmpty, setShowEmpty] = useState(false);

  // Activity B: Callback from child to parent
  function handleAddToCart(id, title) {
    console.log("Adding product:", id, title);
    alert(title + " added to cart!");
  }

  // Homework 4: Filter products
  const filteredProducts = products.filter((product) => {
    return category === "all" || product.category === category;
  });

  // Homework 3: Key experiment
  const [items, setItems] = useState([
    { id: 1, text: "First item" },
    { id: 2, text: "Second item" },
    { id: 3, text: "Third item" },
  ]);

  function prependItem() {
    const newItem = {
      id: Date.now(),
      text: "New item",
    };

    setItems((prev) => [newItem, ...prev]);
  }

  return (
    <main className="container">

      <header className="header">
        <h1>Week 14: React Props, Lists & Conditionals</h1>
        <p>Reusable Components | Props | Lists | Conditional Rendering</p>
      </header>

      {/* ACTIVITY A: THREE DIFFERENT PRODUCTS */}
      <section className="section">
        <h2>Activity A & B: ProductCard and Props</h2>

        <div className="product-grid">

          <ProductCard
            id={101}
            title="Gaming Keyboard"
            price={12500}
            image="https://picsum.photos/seed/keyboard/400/300"
            inStock={true}
            rating={4.8}
            onAddToCart={handleAddToCart}
          />

          <ProductCard
            id={102}
            title="Wireless Mouse"
            price={4200}
            image="https://picsum.photos/seed/mouse/400/300"
            inStock={true}
            rating={4.5}
            onAddToCart={handleAddToCart}
          />

          <ProductCard
            id={103}
            title="Gaming Monitor"
            price={45000}
            image="https://picsum.photos/seed/monitor/400/300"
            inStock={false}
            rating={4.9}
            onAddToCart={handleAddToCart}
          />

        </div>
      </section>

      {/* ACTIVITY C: MAP AND DATA FILE */}
      <section className="section">
        <h2>Activity C: Product Catalogue</h2>

        <p>Total products: {products.length}</p>

        <div className="filter-strip">
          <button onClick={() => setCategory("all")}>All</button>
          <button onClick={() => setCategory("input")}>Input</button>
          <button onClick={() => setCategory("display")}>Display</button>
          <button onClick={() => setCategory("accessory")}>Accessory</button>
          <button onClick={() => setCategory("audio")}>Audio</button>
        </div>

        <ProductList
          products={showEmpty ? [] : filteredProducts}
          onAddToCart={handleAddToCart}
        />

        <button onClick={() => setShowEmpty(!showEmpty)}>
          {showEmpty ? "Show Products" : "Test Empty State"}
        </button>
      </section>

      {/* HOMEWORK 1: BUTTON COMPONENT */}
      <section className="section">
        <h2>Homework 1: Reusable Button</h2>

        <div className="button-showcase">
          <Button label="Primary Small" variant="primary" size="sm" />
          <Button label="Primary Medium" variant="primary" size="md" />
          <Button label="Primary Large" variant="primary" size="lg" />

          <Button label="Secondary Small" variant="secondary" size="sm" />
          <Button label="Secondary Medium" variant="secondary" size="md" />

          <Button label="Danger Small" variant="danger" size="sm" />
          <Button label="Danger Large" variant="danger" size="lg" />

          <Button label="With Icon" icon="⭐" variant="primary" size="md" />

          <Button label="Disabled Button" disabled />
        </div>
      </section>

      {/* HOMEWORK 2: TESTIMONIALS */}
      <section className="section">
        <h2>Homework 2: Customer Testimonials</h2>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>
      </section>

      {/* HOMEWORK 3: KEY EXPERIMENT */}
      <section className="section">
        <h2>Homework 3: Key Experiment</h2>

        <p>
          These inputs use key={"{index}"}. Type something in the
          second input, then prepend a new item.
        </p>

        <button onClick={prependItem}>Prepend New Item</button>

        {items.map((item, index) => (
          <div className="key-row" key={index}>
            <span>{item.text}</span>
            <input defaultValue={item.text} />
          </div>
        ))}

        <div className="explanation">
          <h3>Key Experiment Explanation</h3>

          <p>
            1. Initially, each input displays its corresponding item.
          </p>

          <p>
            2. When I type in the second input, its value changes.
          </p>

          <p>
            3. When I prepend a new item, React matches elements by index.
          </p>

          <p>
            4. Existing DOM input elements may be reused for different items.
          </p>

          <p>
            5. Therefore, typed values can appear beside the wrong item.
          </p>

          <p>
            6. Using key={"{item.id}"} gives each item a stable identity
            and fixes this problem.
          </p>
        </div>
      </section>

      <footer>
        <p>Week 14 React Lab Completed</p>
      </footer>

    </main>
  );
}

export default App;
