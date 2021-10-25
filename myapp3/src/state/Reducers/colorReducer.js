const initialState = {
  myColor: "white",
};
export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COLOR":
      return { myColor: action.data };
    default:
      return state;
  }
  return state;
};
