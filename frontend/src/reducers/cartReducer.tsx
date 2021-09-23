import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  DOWNLOAD_IDS_SUCCESS,
} from '../types/index';

const initialState = {
  items: [{}],
  cart: [],
  // counter: [],
  currentItem: null,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Cet the items data from the products array
      const item = state.items.find(
        (prod: any) => prod.id === action.payload.id,
      );

      // Check if Item is in cart already
      const inCart = state.cart.find((item: any) =>
        item.id === action.payload.id ? true : false,
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item: any) =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : // Si inCart es undefined agregar el item
            [...state.cart, {...item, qty: 1}],
      };

    case DOWNLOAD_IDS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.map((prod: any) =>
          prod.id === action.payload.id
            ? {...prod, qty: prod.qty - 1}
            : state.cart,
        ),
        // cart: state.cart.filter((item: any) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
