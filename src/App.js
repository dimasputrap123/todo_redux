import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pages from "./components";
import "./assets/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Pages.List />
        </Route>
        <Route path="/add" exact>
          <Pages.Add />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
