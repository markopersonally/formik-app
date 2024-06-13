import React from "react";
import FormStyled from "./UI/Form.jsx";
import Input from "./UI/Input.jsx";
import ButtonStyled from "./UI/Button.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  yourName: Yup.string()
    .min(3, "Your name must be at least 3 characters long")
    .required("Required"),
  username: Yup.string().email("Invalid email address").required("Required"),
  age: Yup.number()
    .min(18, "You must be at least 18 years old")
    .required("Required"),
  passwordRegister: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("passwordRegister"), null], "Passwords must match")
    .required("Required"),
  regulations: Yup.boolean()
    .oneOf([true], "You must accept the regulations")
    .required("Required"),
});

export default function RegisterForm({ handleRegister }) {
  const formik = useFormik({
    initialValues: {
      yourName: "",
      username: "",
      age: "",
      passwordRegister: "",
      repeatPassword: "",
      regulations: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleRegister();
    },
  });

  const handleFocus = (field) => {
    formik.setFieldTouched(field, false, false);
    formik.setFieldError(field, null);
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Input
        label="Your name"
        id="yourName"
        name="yourName"
        type="text"
        value={formik.values.yourName}
        onChange={formik.handleChange}
        onFocus={() => handleFocus("yourName")}
        onBlur={formik.handleBlur}
        error={formik.touched.yourName && formik.errors.yourName}
      />
      <Input
        label="Username"
        id="username"
        name="username"
        type="email"
        value={formik.values.username}
        onChange={formik.handleChange}
        onFocus={() => handleFocus("username")}
        onBlur={formik.handleBlur}
        error={formik.touched.username && formik.errors.username}
      />
      <Input
        label="Age"
        id="age"
        name="age"
        type="number"
        value={formik.values.age}
        onChange={formik.handleChange}
        onFocus={() => handleFocus("age")}
        onBlur={formik.handleBlur}
        error={formik.touched.age && formik.errors.age}
      />
      <Input
        label="Password"
        id="passwordRegister"
        name="passwordRegister"
        type="password"
        value={formik.values.passwordRegister}
        onChange={formik.handleChange}
        onFocus={() => handleFocus("passwordRegister")}
        onBlur={formik.handleBlur}
        error={
          formik.touched.passwordRegister && formik.errors.passwordRegister
        }
      />
      <Input
        label="Repeat password"
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        onFocus={() => handleFocus("repeatPassword")}
        onBlur={formik.handleBlur}
        error={formik.touched.repeatPassword && formik.errors.repeatPassword}
      />
      <Input
        className="regulations"
        label="I have read and accept the regulations"
        id="regulations"
        name="regulations"
        type="checkbox"
        checked={formik.values.regulations}
        onChange={formik.handleChange}
        onFocus={() => handleFocus("regulations")}
        onBlur={formik.handleBlur}
        error={formik.touched.regulations && formik.errors.regulations}
      />
      <ButtonStyled type="submit" className="register">
        Register
      </ButtonStyled>
    </FormStyled>
  );
}
