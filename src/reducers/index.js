import * as types from "../constants";

export default function weather(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_API_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
