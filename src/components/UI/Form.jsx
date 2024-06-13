import styled from "styled-components";

const FormStyled = styled.form`
  margin: auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
`;

export default function Form({ children, ...props }) {
  return <FormStyled {...props}>{children}</FormStyled>;
}
