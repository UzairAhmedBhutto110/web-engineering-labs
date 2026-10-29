
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Features />

        <section className="container py-5" id="products">
          <h2 className="text-center mb-3">Featured Products</h2>

          <p className="text-center text-muted">
            Example products demonstrating reusable React components.
          </p>

          <div className="grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
