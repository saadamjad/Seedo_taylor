import { ActionType } from "../actions";

const initialState = {
  isLoading: false,
  data: {},
  Login: [],
  products: []
};

export default (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    // STEPPER

    case ActionType.Login_SUCCESS:
      return {
        ...state,
        Login: action.payload
      };
    case ActionType.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case ActionType.Login_FAIL:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
};
