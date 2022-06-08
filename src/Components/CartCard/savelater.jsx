import { useCart } from "../../Context/cart-context";

export default function SavedLater(props) {
  const { id, name, price, thumbnail, discount, originalPrice } =
    props?.products;
  const { dispatch } = useCart();
  const handleRemove = () =>
    dispatch({ type: "REMOVE_FROM_SAVELATER", payload: id });
  const handleRemoveFromSavedLater = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: props.products,
    });
    dispatch({
      type: "REMOVE_FROM_SAVELATER",
      payload: id,
    });
  };

  return (
    <div key={id} id="card" className="card ecom">
      <div className="product-image">
        <img src={thumbnail} alt="image" />
      </div>
      <div className="cart-badge">
        <div className="card-text">{name}</div>
        <div className="card-price">
          <span className="price-now"> Rs. {price}</span>
          <span className="price-before">Rs. {originalPrice}</span>
          <span className="discount">({discount}% Off)</span>
        </div>
        <button
          onClick={handleRemoveFromSavedLater}
          className="btn btn-primary mb-10 full-width"
        >
          Move to Cart
        </button>
        <button onClick={handleRemove} className="btn full-width">
          Remove From Watch Later
        </button>
      </div>
    </div>
  );
}
