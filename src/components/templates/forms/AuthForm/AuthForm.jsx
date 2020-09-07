import React from "react";
import { Form, Formik } from "formik";

const AuthForm = ({ schema, initial, handleSubmit, data }) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={initial}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        values,
        errors,
        touched,
        setFieldTouched,
        isValid,
      }) => (
        <Form>
          {data.map((el, idx) => {
            if (Array.isArray(el)) {
              return (
                <>
                  <Grid xs={4} item></Grid>
                  <Grid xs={4} item></Grid>
                </>
              );
            } else if (typeof item === "object") {
              return <Grid xs={8} item></Grid>;
            } else return null;
          })}
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
