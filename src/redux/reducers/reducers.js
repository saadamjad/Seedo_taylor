import * as actionTypes from "../actions/types";

const initialState = {
  loading: false,
  activityIndicatorText: "",
  theme: false,
  userData: {},
  products: [],
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

    case actionTypes.SET_USER_DATA:
      console.log("USERDATA", action.payload);
      return {
        ...state,
        userData: action.payload
      };
      case actionTypes.GET_PRODUCT:
     //   console.warn("this. prduct",action.payload)
        return{
          ...state,
          products:action.payload,
        }

    default:
      return state;
  }
}
