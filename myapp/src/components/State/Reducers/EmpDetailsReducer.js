const initialState = {
  empData: [
    {
      name: "Amer khan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOToIj8HdMZuxYH3Kqbs3S9Qbgw3sa7niRg&usqp=CAU",
      desc: "UI Developer ",
    },
    {
      name: "Salman khan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppVD3tRvr7zOPcEwo3HuyBumRiCsheZ0uqw&usqp=CAU",
      desc: "Backend Developer ",
    },
  ],
};
export const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMP":
      return { ...state, empData: [action.empData, ...state.empData] };
    default:
      return state;
  }
};
