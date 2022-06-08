import "./style.css";
import { useCart } from "../../Context/cart-context";
import CartCard from "../../Components/CartCard";
const Cart = () => {
  const { cart } = useCart();
  const totalPriceOfCart = cart.reduce((accu, curr) => {
    return accu + curr.price * curr.quantity;
  }, 0);
  console.log(totalPriceOfCart);
  return cart.length === 0 ? (
    <div className="error-page">
      <h1>Your cart is Empty.</h1>
    </div>
  ) : (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="text-center mt-10">My Cart({cart.length} items)</h1>
      </div>
      <div className="cart-div">
        <div className="cart-left-item">
          {cart.map((eachItem) => (
            <CartCard key={eachItem.id} products={eachItem} />
          ))}
        </div>
        <div className="cart-right-item">
          <div className="checkout-cart">
            <strong>
              <p className="mb-10">PRICE DETAILS</p>
            </strong>
            <hr />
            <div className="rate-justify">
              <p>Price({cart.length} items)</p>
              <p>₹14000</p>
            </div>
            <div className="rate-justify">
              <p>Discount</p>
              <p>₹1000</p>
            </div>
            <div className="rate-justify">
              <p>Delivery Charges</p>
              <p>₹499</p>
            </div>
            <hr />
            <div className="rate-justify">
              <strong>
                <p>TOTAL AMOUNT</p>
              </strong>
              <strong>
                <p>₹1400</p>
              </strong>
            </div>
            <hr className="mb-10" />
            <p className="mb-10">You will save ₹1 on this order</p>
            <button
              //   onClick={() => handlePlaceOrder()}
              className="btn btn-primary mb-10"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
