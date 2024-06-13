import React from "react";
import Input from "./UI/Input.jsx";
import ButtonStyled from "./UI/Button.jsx";
import FormStyled from "./UI/Form.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const validationSchema = Yup.object({
  yourName: Yup.string()
    .min(3, "Your name must be at least 3 characters long")
    .required("Required"),
  emailRegister: Yup.string()
    .email("Invalid email address")
    .required("Required"),
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

export default function RegisterForm({ handleRegister, handleToggle }) {
  const formik = useFormik({
    initialValues: {
      yourName: "",
      emailRegister: "",
      age: "",
      passwordRegister: "",
      repeatPassword: "",
      regulations: false,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      handleRegister();
    },
  });

  const handleFocus = (field) => {
    formik.setFieldTouched(field, false, false);
    formik.setFieldError(field, null);
  };

  const handleBlur = (field) => {
    if (formik.values[field]) {
      formik.setFieldTouched(field, true, true);
    } else {
      formik.setFieldTouched(field, false, true);
    }
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <DivFlex>
        <Input
          label="Your name"
          id="yourName"
          type="text"
          {...formik.getFieldProps("yourName")}
          error={formik.touched.yourName && formik.errors.yourName}
          onFocus={() => handleFocus("yourName")}
          onBlur={() => handleBlur("yourName")}
        />
        <Input
          label="Email"
          id="emailRegister"
          type="email"
          {...formik.getFieldProps("emailRegister")}
          error={formik.touched.emailRegister && formik.errors.emailRegister}
          onFocus={() => handleFocus("emailRegister")}
          onBlur={() => handleBlur("emailRegister")}
        />
      </DivFlex>
      <Input
        label="Age"
        id="age"
        type="number"
        {...formik.getFieldProps("age")}
        error={formik.touched.age && formik.errors.age}
        onFocus={() => handleFocus("age")}
        onBlur={() => handleBlur("age")}
      />
      <DivFlex>
        <Input
          label="Password"
          id="passwordRegister"
          type="password"
          {...formik.getFieldProps("passwordRegister")}
          error={
            formik.touched.passwordRegister && formik.errors.passwordRegister
          }
          onFocus={() => handleFocus("passwordRegister")}
          onBlur={() => handleBlur("passwordRegister")}
        />
        <Input
          label="Repeat password"
          id="repeatPassword"
          type="password"
          {...formik.getFieldProps("repeatPassword")}
          error={formik.touched.repeatPassword && formik.errors.repeatPassword}
          onFocus={() => handleFocus("repeatPassword")}
          onBlur={() => handleBlur("repeatPassword")}
        />
      </DivFlex>
      <Input
        className="regulations"
        label="I have read and accept the regulations"
        id="regulations"
        type="checkbox"
        {...formik.getFieldProps("regulations")}
        error={formik.touched.regulations && formik.errors.regulations}
        onFocus={() => handleFocus("regulations")}
        onBlur={() => handleBlur("regulations")}
      />
      <ButtonStyled type="submit" className="register">
        Register
      </ButtonStyled>
      <ButtonStyled type="button" className="switchBtn" onClick={handleToggle}>
        Back to login
      </ButtonStyled>
    </FormStyled>
  );
}
