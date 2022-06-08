import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cart-reducer";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
    savedForLater: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartContextProvider };
