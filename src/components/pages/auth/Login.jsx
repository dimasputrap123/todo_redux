import { Button } from "@material-ui/core";
import Axios from "axios";
import React, { Component } from "react";
import FieldText from "../../atoms/Input/FieldText/FieldText";
import TempLogin from "../../templates/Desktop/TempLogin";
import "./styles.css";

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
    const url = "https://staging.syailendra.id/apiv2/auth-login";
    console.log("state", this.state.value);
    const { username, password } = this.state.value;

    let formData = new FormData();
    formData.append("identity", username);
    formData.append("password", password);

    // fetch(url, { method: "post", headers: {}, body: formData })
    //   .then((res) => {
    //     console.log("res", res);
    //     return res.json();
    //   })
    //   .then((e) => {
    //     console.log("ress", e);
    //   });

    let json = Axios({
      method: "post",
      data: formData,
      url: url,
    }).then((res) => {
      console.log("res", res);
      return res.data;
    });

    this.setState({
      result: json,
    });

    // fetch(ktp_url, {
    //   headers: {Authorization: token.toString()},
    // })
    //   .then(r => r.blob())
    //   .then(d => {
    //     this.setState({
    //       imageWeb: URL.createObjectURL(d),
    //     });
    //   })
  };

  render() {
    const { value, form } = this.state;
    return (
      <TempLogin>
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
            LOGIN
          </Button>
        </form>
      </TempLogin>
    );
  }
}

export default Login;
