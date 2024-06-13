import React from "react";
import Input from "./Input.jsx";
import ButtonStyled from "./Button.jsx";
import { useFormik } from "formik";
import styled from "styled-components";

const FormStyled = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
`;

export default function LogInForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Input
        label="email"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        label="password"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ButtonStyled className="logIn">Log in</ButtonStyled>
    </FormStyled>
  );
}
