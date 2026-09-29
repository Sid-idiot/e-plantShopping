import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { categories, plants } from '../data/plants';
import Navbar from './Navbar';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const inCart = id => cartItems.some(item => item.id === id);

  return (
    <>
      <Navbar />
      <main className="listing-page">
        <section className="page-heading">
          <p className="eyebrow">SHOP HOUSEPLANTS</p>
          <h1>Find your perfect plant</h1>
          <p>Choose from tropical foliage, succulents, cacti, and air-purifying favorites.</p>
        </section>

        {categories.map(category => (
          <section className="category" key={category}>
            <div className="category-heading">
              <h2>{category}</h2>
              <span>{plants.filter(p => p.category === category).length} plants</span>
            </div>
            <div className="product-grid">
              {plants.filter(p => p.category === category).map(plant => (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <p className="product-category">{plant.category}</p>
                    <h3>{plant.name}</h3>
                    <p className="description">{plant.description}</p>
                    <div className="product-footer">
                      <strong>₹{plant.price.toLocaleString('en-IN')}</strong>
                      <button
                        className="add-btn"
                        disabled={inCart(plant.id)}
                        onClick={() => dispatch(addToCart(plant))}
                      >
                        {inCart(plant.id) ? 'Added ✓' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
