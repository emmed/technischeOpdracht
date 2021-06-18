// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import classes from "./App.css";
import Homepage from "./components/Homepage";
import Details from "./components/Details";
import Favorieten from "./components/Favorieten"
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavigationBar from "./components/NavigationBar";


 function App() {

  return (
    <div>
     <Router>
     <NavigationBar />

    <Switch>
      <Route path="/favorieten" component={Favorieten}/>
      <Route path="/id/:id/info" component={Details}/>
      <Route path="/" component={Homepage}/>
    </Switch>
    
    </Router>
    </div>

  );
}

export default App;
