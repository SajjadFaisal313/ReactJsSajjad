import { createHistogram, combineReducers, createStore } from "redux";
import {groupReducer} from "../Reducers/groupReducer"

const Configurestore = () => {
  const store = createStore (
    combineReducers(
      {
        groupReducer
      })
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}