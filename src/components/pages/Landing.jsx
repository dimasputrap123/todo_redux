import React, { Component } from "react";
import { Button } from "@material-ui/core";
import moduleName from "./";
import Pages from "./index";
import { withRouter } from "react-router-dom";
const pages = [
  "/",
  "/add",
  "/list",
  "/login",
  "/register",
  "/list-albums",
  "/list-photos",
];
export class Landing extends Component {
  _navigate = (dest) => {
    console.log("props", dest);
    this.props.history.push(dest);
  };

  render() {
    return (
      <div>
        <p>ini halaman lanading</p>
        {pages.map((el, idx) => (
          <Button key={idx} color="primary" onClick={() => this._navigate(el)}>
            {el}
          </Button>
        ))}
      </div>
    );
  }
}

export default withRouter(Landing);
