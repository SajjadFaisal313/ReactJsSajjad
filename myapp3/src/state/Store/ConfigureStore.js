import { combineReducers, createStore } from "redux";
import { colorReducer } from "../Reducers/colorReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      colorReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
