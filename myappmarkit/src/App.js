import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/store/configStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./componnents/Home";

function App() {
  const localStore = configStore();

  return (
    <React.Fragment>
      <Provider store={localStore}>
        <Home />
      </Provider>
    </React.Fragment>
  );
}

export default App;
