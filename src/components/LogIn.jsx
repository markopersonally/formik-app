import React from "react";
import Input from "./UI/Input.jsx";
import ButtonStyled from "./UI/Button.jsx";
import FormStyled from "./UI/Form.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Required"),
});

export default function LogInForm({ handleToggle, onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Simulate successful login
      console.log(values);
      onLogin();
    },
  });

  const handleFocus = (field) => {
    formik.setFieldTouched(field, false, false);
    formik.setFieldError(field, null);
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onFocus={() => handleFocus("email")}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
      />
      <Input
        label="Password"
        id="passwordLogin"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onFocus={() => handleFocus("password")}
        value={formik.values.password}
        error={formik.touched.password && formik.errors.password}
      />
      <ButtonStyled type="submit" className="logIn">
        Log in
      </ButtonStyled>
      <a href="#" onClick={handleToggle}>No account?</a>
    </FormStyled>
  );
}
