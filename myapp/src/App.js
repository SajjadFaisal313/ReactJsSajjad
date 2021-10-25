import "./App.css";
import React from "react";

import { AboutUs } from "./components/Routes/Navigation/AboutUs";
import { Contact } from "./components/Routes/Navigation/Contact";
import { Courses } from "./components/Routes/Navigation/Courses";
import { Home } from "./components/Routes/Navigation/Home";
import { Navigation } from "./components/Routes/Navigation/Navigation";
import { Services } from "./components/Routes/Navigation/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Clock } from './components/Clock';
// import { Counter } from './components/Counter';
// import { DictionaryParent } from './components/Dictionary/DictionaryParent';
import { Login } from "./components/Login";
// import { EmiCal, Login } from './components/Calculator';
// import { FetchingDataFromRedux } from "./components/State/Redux/FetchingDataFromRedux";
import EmpDetails from "./components/State/Redux/EmpDetails";
import { Details } from "./components/Details";
import { FormTable } from "./components/FormTable";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navigation />
        <Switch>
          <div>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Courses">
              <Courses />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </div>
        </Switch>
      </Router> */}
      {/* <EmpDetails /> */}
      <Details />
    </div>
  );
}

export default App;
