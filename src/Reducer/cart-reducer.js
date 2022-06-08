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
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "INCREASE_ITEM":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload) {
            product = {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };
    case "DECREASE_ITEM":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id === action.payload) {
            product = {
              ...product,
              quantity: product.quantity - 1 < 1 ? 1 : product.quantity - 1,
            };
          }
          return product;
        }),
      };
    case "MOVE_TO_SAVELATER":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        savedForLater: [...state.savedForLater, action.payload],
      };
    case "REMOVE_FROM_SAVELATER":
      return {
        ...state,
        savedForLater: state.savedForLater.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "REMOVE_ITEM_FROM_SAVEDLATER_CART":
      return {
        ...state,
        cart: [
          state.cart.map((product) => {
            if (product.id === action.payload.id) {
              product = {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              state.cart.push(action.payload);
            }
            return product;
          }),
        ],
        savedForLater: state.savedForLater.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export { cartReducer };
