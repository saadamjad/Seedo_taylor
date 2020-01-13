import * as actionTypes from "../actions/types";
import { ActionSheet } from "native-base";

const initialState = {
  loading: false,
  activityIndicatorText: "",
  theme: false,
  userData: {},
  products: [],
  cart: { products: [], subTotal: 0, shipmentTotal: 0 },
  AIData: [],
  measurements: [],
  productsDiscriptions: {},
  orders: []
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

    case actionTypes.SET_USER_DATA:
      console.log("USERDATA", action.payload);
      return {
        ...state,
        userData: action.payload
      };
    case actionTypes.GET_PRODUCT:
      //   console.warn("this. prduct",action.payload)
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.PRODUCT_DISCRIPTIONS: // ye description name ka q dya hy?
      /// jo b thek krooo
      return {
        ...state,
        productsDiscriptions: action.payload,
        measurements: [action.payload]
      };
    case actionTypes.EMPTY_MEASUREMENT:
      if (action.payload) {
      
        return {
          ...state,
          measurements: []
        };
      }
    case actionTypes.GET_ORDER:
      return {
        ...state,
        orders: action.payload
      };

    default:
      return state;
  }
}
