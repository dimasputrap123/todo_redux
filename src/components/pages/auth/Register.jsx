import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import FieldText from "../../atoms/Input/FieldText/FieldText";
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import * as Yup from "yup";
import "./styles.css";

const validation = Yup.object().shape({
  email: Yup.string().email("Format email salah").required("Email harus diisi"),
  username: Yup.string().required("Username harus diisi"),
  password: Yup.string().required("Password harus diisi"),
  jenis_kelamin: Yup.string().required("Jenis kelamin harus diisi"),
});

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      form: [
        {
          name: "email",
          label: "Email",
        },
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

  _handleChange = (data) => {
    console.log("data", data);
  };

  onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      img: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    const { form, img } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <Formik
          validationSchema={validation}
          enableReinitialize={false}
          initialValues={{
            email: "",
            username: "",
            password: "",
            jenis_kelamin: "",
          }}
          onSubmit={(values) => {
            console.log("submit", values);
          }}
        >
          {({
            handleChange,
            values,
            errors,
            touched,
            setFieldTouched,
            isValid,
          }) => {
            return (
              <Form>
                {/* {form.map((el, idx) => (
                  <FieldText
                    key={el.name}
                    handleChange={handleChange}
                    value={values[el.name]}
                    error={touched[el.name] && errors[el.name]}
                    onFocus={() => setFieldTouched(el.name)}
                    {...el}
                  />
                ))} */}
                <Grid container spacing={1}>
                  <Grid xs={4} item>
                    <FieldText
                      key={"username"}
                      handleChange={handleChange}
                      value={values["username"]}
                      error={touched["username"] && errors["username"]}
                      onFocus={() => setFieldTouched("username")}
                      name={"username"}
                      label={"Username"}
                    />
                  </Grid>
                  <Grid xs={4} item>
                    <FieldText
                      key={"email"}
                      handleChange={handleChange}
                      value={values["email"]}
                      error={touched["email"] && errors["email"]}
                      onFocus={() => setFieldTouched("email")}
                      name={"email"}
                      label={"Email"}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    {/* <FieldText
                      key={"password"}
                      handleChange={handleChange}
                      value={values["password"]}
                      error={touched["password"] && errors["password"]}
                      onFocus={() => setFieldTouched("password")}
                      name={"password"}
                      label={"Password"}
                    /> */}
                    <input
                      type="file"
                      name="file"
                      onChange={this.onChangeHandler}
                    />
                  </Grid>
                  <Grid xs={4} item>
                    <FormControl className={"cont_gender"}>
                      <InputLabel id="demo-simple-select-label">
                        Jenis kelamin
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        name={"jenis_kelamin"}
                        value={values["jenis_kelamin"]}
                        onChange={handleChange}
                        label="Jenis Kelamin"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"man"}>Laki-laki</MenuItem>
                        <MenuItem value={"woman"}>Perempuan</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!isValid}
                >
                  MASUK
                </Button>
              </Form>
            );
          }}
        </Formik>
        <div>
          <img src={img} />
        </div>
      </div>
    );
  }
}

export default Register;
