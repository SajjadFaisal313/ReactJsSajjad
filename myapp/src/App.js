import './App.css';
import React from 'react';

// import { AboutUs } from "./components/Routes/AboutUs";
// import { Contact } from "./components/Routes/Contact";
// import { Courses } from "./components/Routes/Courses";
// import { Home } from "./components/Routes/Home";
// import { Navigation } from "./components/Routes/Navigation/Navigation";
// import { Services } from "./components/Routes/Services";
// import { Login } from "./components/Login"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Clock } from './components/Clock';
// import { Counter } from './components/Counter';
import { DictionaryParent } from './components/Dictionary/DictionaryParent';


function App() {
  return (
    <div className="App">
         {/* <Router>
      <Navigation/>
      <Switch>
      <div>
        <Route path="/Home"><Home/></Route>
        <Route path="/AboutUs"><AboutUs/></Route>
        <Route path="/Services"><Services/></Route>
        <Route path="/Contact"><Contact/></Route>
        <Route path="/Courses"><Courses/></Route>
        <Route exact path="/"><Login/></Route>
      </div>
      </Switch>
    </Router> */}
    <DictionaryParent/>
    </div>
  );
}

export default App;