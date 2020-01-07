import * as actionsTypes from "../../saadredux/actions/types";

const initialState = {
  startloading: false,
  notloading: false,
  userData: {},
  addProducts: false,
  deleteProduct: false,
  updateProduct: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        startloading: true
        // activityIndicatorText: action.payload
      };

    case actionsTypes.NOT_LOADING:
      return {
        ...state,
        notloading: false
      };
    case actionsTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
  }
}
