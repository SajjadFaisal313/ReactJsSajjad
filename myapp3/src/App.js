import React from "react";
import { ConfigureStore } from "./state/Store/ConfigureStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Task } from "./Components/ReactTask/Task";

export const App = () => {
  const store = ConfigureStore();
  return (
    <React.Fragment className="App">
      <Provider store={store}>
        <Task />
      </Provider>
    </React.Fragment>
  );
};
