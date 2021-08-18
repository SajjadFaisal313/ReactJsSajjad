import { combineReducers, createStore } from "redux";
import { groupReducer } from "../Reducers/groupReducer";
import { empReducer } from "../Reducers/EmpDetailsReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      groupReducer,
      empReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
