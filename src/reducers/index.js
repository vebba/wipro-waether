export default function weather(state = {}, action) {
  switch (action.type) {
    case "DATA_SUCCESS":
      return action.payload;
    default:
      return state;
  }
}
