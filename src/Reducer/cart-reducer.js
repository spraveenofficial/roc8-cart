const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let cartArray = state.cart;
      const checkIfExists = cartArray.find(
        (product) => product.id === action.payload.id
      );
      if (!checkIfExists) {
        cartArray = [...cartArray, { ...action.payload, quantity: 1 }];
      } else {
        cartArray = cartArray.map((product) => {
          if (action.payload.id === product.id) {
            product = {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      }
      return { ...state, cart: cartArray };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export { cartReducer };
