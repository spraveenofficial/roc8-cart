import "./style.css";
import { useCart } from "../../Context/cart-context";
import CartCard from "../../Components/CartCard";
import SavedLater from "../../Components/CartCard/savelater";
const Cart = () => {
  const { cart, savedForLater } = useCart();
  const totalPriceOfCart = cart.reduce((accu, curr) => {
    return accu + curr.price * curr.quantity;
  }, 0);
  const totalPriceOfCartWithoutDiscount = cart.reduce((accu, curr) => {
    return (
      accu + (curr.price + (curr.price * curr.discount) / 100) * curr.quantity
    );
  }, 0);

  return (
    <>
      <div className="cart-page">
        {cart.length === 0 ? (
          <div className="no-items-cart">
            <h1>My Cart (0 items)</h1>
            <div>
              <h1>No items in Cart</h1>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-header">
              <h1 className="text-center mt-10">
                My Cart({cart.length} items)
              </h1>
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
                    <p>₹{totalPriceOfCartWithoutDiscount}</p>
                  </div>
                  <div className="rate-justify">
                    <p>Discount</p>
                    <p>
                      ₹
                      {(
                        totalPriceOfCartWithoutDiscount - totalPriceOfCart
                      ).toFixed(2)}
                    </p>
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
                      <p>₹{totalPriceOfCart + 499}</p>
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
          </>
        )}
      </div>
      <div className="wishlist-page">
        {savedForLater.length === 0 ? (
          <div className="no-items-cart">
            <h1>My Saved Laters (0 items)</h1>
            <div>
              <h1>No items in Save Later</h1>
            </div>
          </div>
        ) : (
          <>
            <div className="cart-header">
              <h1 className="text-center mt-10">
                My Saved Laters({savedForLater.length} items)
              </h1>
            </div>
            <div className="wishlish-items flex">
              {savedForLater.map((eachItem) => (
                <SavedLater key={eachItem.id} products={eachItem} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
