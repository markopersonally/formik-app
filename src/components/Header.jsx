import styled from "styled-components";
import ButtonStyled from "./Button.jsx";
import logoImg from "../images/logo.png";

const HeaderStyled = styled.header`
  height: 70px;
  background-color: #27132a;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImgStyled = styled.img`
  margin-left: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const UlStyled = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 30px;
`;

const LiStyled = styled.li`
  list-style: none;
`;

const AStyled = styled.a`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #4a2850;
  border-radius: 20px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div>
        <ImgStyled src={logoImg} alt="page logo" />
      </div>
      <nav>
        <UlStyled>
          <LiStyled>
            <AStyled href="">home</AStyled>
          </LiStyled>
          <LiStyled>
            <AStyled href="">profiles</AStyled>
          </LiStyled>
        </UlStyled>
      </nav>
      <ButtonStyled className="logout">logout</ButtonStyled>
    </HeaderStyled>
  );
}
