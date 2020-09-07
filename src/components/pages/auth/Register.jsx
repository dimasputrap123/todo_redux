import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import FieldText from "../../atoms/Input/FieldText/FieldText";
import { Button, Grid } from "@material-ui/core";
import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().email("Format email salah").required("Email harus diisi"),
  username: Yup.string().required("Username harus diisi"),
  password: Yup.string().required("Password harus diisi"),
});

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { form } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <Formik
          validationSchema={validation}
          initialValues={{
            email: "",
            username: "",
            password: "",
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
                  <Grid xs={8} item>
                    <FieldText
                      key={"password"}
                      handleChange={handleChange}
                      value={values["password"]}
                      error={touched["password"] && errors["password"]}
                      onFocus={() => setFieldTouched("password")}
                      name={"password"}
                      label={"Password"}
                    />
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
      </div>
    );
  }
}

export default Register;
