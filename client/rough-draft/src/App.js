import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/something">
            <JSPageOne />
          </Route>
          <Route path="/somethingtwo">
            <JSPageTwo />
          </Route>
          <Route path="/somethingthree">
            <JSPageThree />
          </Route>
          <Route exact path="/">
            <JSLandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
