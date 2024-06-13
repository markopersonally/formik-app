import React, { useState } from "react";
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
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      onLogin();
    },
  });

  const handleFocus = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (e) => {
    formik.handleChange(e);
    setTouchedFields((prev) => ({ ...prev, [e.target.name]: true }));
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Input
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        onFocus={() => handleFocus("email")}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={touchedFields.email && formik.errors.email}
      />
      <Input
        label="Password"
        id="passwordLogin"
        name="password"
        type="password"
        onChange={handleChange}
        onFocus={() => handleFocus("password")}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={touchedFields.password && formik.errors.password}
      />
      <ButtonStyled type="submit" className="logIn">
        Log in
      </ButtonStyled>
      <ButtonStyled className="switchBtn" onClick={handleToggle}>
        No account?
      </ButtonStyled>
    </FormStyled>
  );
}
