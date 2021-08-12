import React from "react";
import { createStore, combineReducers } from "redux";
import { groupReducer } from "../../Reducers/groupReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      groupReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  );
  return store;
};