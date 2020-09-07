import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import FieldText from "../../atoms/Input/FieldText/FieldText";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      form: [
        {
          name: "username",
          label: "Username",
        },
        {
          name: "password",
          label: "Password",
        },
      ],
    };
  }
  /**
   *
   *
   * @param {*} data
   * name = username => data.target.name
   * value  = asdaasd => data.target.value
   */
  _handleChange = (data) => {
    const { value } = this.state;

    this.setState({
      value: {
        ...value,
        [data.target.name]: data.target.value,
      },
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    console.log("state", this.state.value);
  };

  render() {
    const { value, form } = this.state;
    const { username, password } = value;

    return (
      <div>
        <p>Ini halaman login</p>
        <form onSubmit={this._handleSubmit}>
          {form.map((el, idx) => (
            <FieldText
              key={el.name}
              handleChange={this._handleChange}
              value={value[el.name]}
              {...el}
            />
          ))}
          <Button variant="contained" color="primary" type="submit">
            MASUK
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
