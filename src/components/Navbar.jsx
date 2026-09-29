import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header className="navbar">
      <Link className="brand" to="/">Paradise Nursery</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart" aria-label={`Cart with ${count} items`}>
          🛒 Cart <span className="cart-count">{count}</span>
        </Link>
      </nav>
    </header>
  );
}
