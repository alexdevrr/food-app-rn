import {CART_ACCUMULATED} from '../types/index';
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  DOWNLOAD_IDS_SUCCESS,
} from '../types/index';

const initialState = {
  items: [{}],
  cart: [],
  currentItem: null,
  totalPrice: null,
  // counter: [],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Cet the items data from the products array
      const item = state.items.find(
        (prod: any) => prod._id === action.payload.id,
      );

      // Check if Item is in cart already
      const inCart = state.cart.find((item: any) =>
        item._id === action.payload.id ? true : false,
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item: any) =>
              item._id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : // Si inCart es undefined agregar el item
            [...state.cart, {...item, qty: 1}],
      };

    case CART_ACCUMULATED:
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
      };

    case DOWNLOAD_IDS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    case REMOVE_TO_CART:
      const verifyItemId = state.cart.find((item: any) =>
        item._id === action.payload.id ? true : false,
      );

      return {
        ...state,
        cart: verifyItemId
          ? state.cart.map((prod: any) =>
              prod._id === action.payload.id
                ? {...prod, qty: prod.qty - 1}
                : prod,
            )
          : [...state.cart],
      };

    default:
      return state;
  }
};

export default cartReducer;
