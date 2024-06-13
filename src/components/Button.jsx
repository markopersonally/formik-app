import styled from "styled-components";

const ButtonStyled = styled.button`
  color: #000;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 3px;
  border: none;

  &:focus {
    outline: none;
    background-color: #c3c3c3;
  }

  &:hover {
    cursor: pointer;
  }

  &.logout {
    background-color: #ffd700;
    margin-right: 50px;
  }

  &.logIn {
    color: #fff;
    background-color: #498cf0;
  }
`;

export default function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
