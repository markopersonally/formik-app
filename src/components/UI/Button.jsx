import styled from "styled-components";

const ButtonStyled = styled.button`
  color: #000;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 3px;
  border: none;
  transition: background-color ease-in-out 0.4s;

  &:focus {
    outline: none;
    background-color: #c3c3c3;
  }

  &:hover {
    cursor: pointer;
  }

  &.logout {
    text-transform: uppercase;
    background-color: #ffd700;
    margin-right: 50px;

    @media (max-width: 768px) {
      margin-right: 0px;
    }
  }

  &.logout:hover {
    color: #fff;
    background-color: #9d8502;
    transition: color ease-out 0.4s;
  }

  &.logIn {
    color: #fff;
    background-color: #498cf0;
  }

  &.logIn:hover {
    background-color: #2c538f;
  }

  &.register {
    color: #fff;
    background-color: #27683c;
  }

  &.register:hover {
    background-color: #5cca81;
  }

  &.switchBtn {
    background-color: transparent;
    text-decoration: underline;
  }

  &.switchBtn:hover {
    color: #2c538f;
    transition: color 0.4s;
  }
`;

export default function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}
