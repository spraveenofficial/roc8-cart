import { useCart } from "../../Context/cart-context";

export default function CartCard(props) {
  const { dispatch } = useCart();
  const { id, name, price, quantity, thumbnail, originalPrice, discount } =
    props.products;

  const handleRemoveFromCart = () =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const handleIncrease = () => dispatch({ type: "INCREASE_ITEM", payload: id });
  const handleDecrease = () => dispatch({ type: "DECREASE_ITEM", payload: id });
  const handleSaveLater = () =>
    dispatch({ type: "MOVE_TO_SAVELATER", payload: props.products });
  return (
    <div key={id} className="cart-item-product flex mb-10">
      <img src={thumbnail} alt="product-img" />
      <div className="cart-item-data flex">
        <p>{name}</p>
        <section className="flex text-center align-center">
          <h3 className="mr-10">₹ {price}</h3>
          <p className="text-gray ml-10 text-cross">₹ {originalPrice}</p>
        </section>
        <h2 className="text-gray">{discount}% off</h2>
        <div className="quantity-div flex mb-10">
          <p>Quantity:</p>
          {quantity === 1 ? (
            <i onClick={handleRemoveFromCart} className="fa-solid fa-trash"></i>
          ) : (
            <i onClick={handleDecrease} className="fa-solid fa-minus"></i>
          )}
          <input type="number" value={quantity} readOnly />
          <i onClick={handleIncrease} className="fa-solid fa-plus"></i>
        </div>
        <button
          onClick={handleRemoveFromCart}
          className="btn btn-primary mb-10"
        >
          Remove from Cart
        </button>
        <button onClick={handleSaveLater} className="btn">
          Move to Save Later
        </button>
      </div>
    </div>
  );
}
