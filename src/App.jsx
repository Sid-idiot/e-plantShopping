import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function Home() {
  return (
    <main className="landing-page">
      <div className="background-image">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO PARADISE NURSERY</p>

          <h1>
            Welcome to <span>Paradise Nursery</span>
          </h1>

          <p className="hero-text">
            Discover beautiful houseplants selected for modern homes, study
            spaces, and first-time plant parents.
          </p>

          <Link className="primary-btn hero-btn" to="/plants">
            Get Started
          </Link>
        </div>
      </div>

      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
