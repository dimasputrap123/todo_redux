import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pages from "./components/pages";
import "./assets/styles/common.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const pages = [
  ["/", <Pages.Landing />],
  ["/add", <Pages.Add />],
  ["/list", <Pages.List />],
  ["/login", <Pages.Login />],
  ["/register", <Pages.Register />],
];

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map((el, idx) => {
          return (
            <Route key={idx} path={el[0]} exact>
              {el[1]}
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
