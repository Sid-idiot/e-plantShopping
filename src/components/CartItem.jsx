import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice';
import Navbar from './Navbar';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <section className="page-heading cart-heading">
          <p className="eyebrow">YOUR SHOPPING CART</p>
          <h1>Plant Cart</h1>
          <p>Review your plants, update quantities, or continue shopping.</p>
        </section>

        {items.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-icon">🌿</div>
            <h2>Your cart is empty</h2>
            <p>Find a new green companion for your space.</p>
            <Link className="primary-btn" to="/plants">Continue Shopping</Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items">
              {items.map(item => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <div>
                      <p className="product-category">{item.category}</p>
                      <h2>{item.name}</h2>
                      <p>Unit price: ₹{item.price.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="quantity-row">
                      <div className="quantity-control">
                        <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name}`}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name}`}>+</button>
                      </div>
                      <strong>₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
                      <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-line"><span>Items</span><span>{items.reduce((s, i) => s + i.quantity, 0)}</span></div>
              <div className="summary-line"><span>Subtotal</span><span>₹{total.toLocaleString('en-IN')}</span></div>
              <div className="summary-line"><span>Delivery</span><span>Free</span></div>
              <hr />
              <div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
              <button className="checkout-btn" onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
              <Link className="continue-btn" to="/plants">Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
