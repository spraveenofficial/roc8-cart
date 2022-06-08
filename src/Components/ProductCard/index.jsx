import { useCart } from "../../Context/cart-context";

export default function ProductCard(props) {
  const { cart, dispatch } = useCart();
  const { id, name, price, thumbnail, discount } = props?.products;
  const originalPrice = price + discount / 100;
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: props.products,
    });
  };

  const isAlreadyExists = cart.some((product) => product.id === id);

  return (
    <div id="card" className="card ecom">
      <div className="product-image">
        <img src={thumbnail} />
      </div>
      <div className="cart-badge">
        <div className="card-text">{name}</div>
        <div className="card-price">
          <span className="price-now"> Rs. {price}</span>
          <span className="price-before">Rs. {originalPrice}</span>
          <span className="discount">({discount}% Off)</span>
        </div>
        {!isAlreadyExists ? (
          <button onClick={handleAddToCart} className="btn full-width">
            Add to Cart
          </button>
        ) : (
          <button className="btn btn-primary full-width" disabled>
            Added to cart
          </button>
        )}
      </div>
    </div>
  );
}
