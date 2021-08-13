const groupsDefaultState = {
  data: [
    {
      Name: "xyz",
      Age: 20,
      Addr: "ABC",
    },

    {
      Name: "xyz",
      Age: 20,
      Addr: "ABC",
    },
    {
      Name: "xyz",
      Age: 20,
      Addr: "ABC",
    },
  ],
};
export const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, data: [...state.data, action.data] };
    default:
      return state;
  }
};
