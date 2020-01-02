import * as actionTypes from "../actions/types";

const initialState = {
  loading: false,
  activityIndicatorText: "",
  theme: false,
  userData: {},
  products: false,
  cart: { products: [], subTotal: 0, shipmentTotal: 0 },
  AIData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
        activityIndicatorText: action.payload
      };

    case actionTypes.NOT_LOADING:
      return {
        ...state,
        loading: false
      };

    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case actionTypes.SET_USER_DATA:
      console.log("USERDATA", action.payload);
      return {
        ...state,
        userData: action.payload
      };
    // case actionTypes.SET_PRODUCTS:
    //   console.log("PRODUCTS", action.payload);
    //   return {
    //     ...state,
    //     products: action.payload
    //   };
    // case actionTypes.SET_CART_PRODUCTS:
    //   console.log("Cart PRODUCTS", action.payload);
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       products: action.payload.cartProducts,
    //       subTotal: action.payload.subTotal
    //     }
    //   };
    // case actionTypes.SET_SHIPMENT_ADDRESS:
    //   console.log("Shipment Address", action.payload);
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       shipmentAddress: action.payload
    //     }
    //   };
    // case actionTypes.SET_PAYMENT_METHOD:
    //   console.log("payment method", action.payload);
    //   return {
    //     ...state,
    //     cart: {
    //       ...state.cart,
    //       paymentMethod: action.payload
    //     }
    //   };
    // case actionTypes.CLEAR_CART:
    //   console.log("clear cart");
    //   return {
    //     ...state,
    //     cart: { products: [], subTotal: 0, shipmentTotal: 0 }
    //   };
    // case actionTypes.SET_AI_DATA:
    //   return {
    //     ...state,
    //     AIData: action.payload
    //   };

    default:
      return state;
  }
}
