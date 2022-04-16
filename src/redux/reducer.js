import * as types from "./ActionType";
const initialState = {
  counters: [],
  country: {},
  loading: true,
};

const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        counters: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default countryReducers;
