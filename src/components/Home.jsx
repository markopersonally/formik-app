import styled from "styled-components";
import ButtonStyled from "./UI/Button.jsx";
import logoImg from "../images/logo.png";

const HeaderStyled = styled.header`
  height: 70px;
  background-color: #27132a;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 100%;
    padding: 20px;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
  }
`;

const ImgStyled = styled.img`
  margin-left: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const UlStyled = styled.ul`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
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

const H2Styled = styled.h2`
  text-align: center;
  color: #fff;
`;

export default function Home({ handleLogout }) {
  return (
    <>
      <HeaderStyled>
        <ImgStyled src={logoImg} alt="page logo" />
        <nav>
          <UlStyled>
            <LiStyled>
              <AStyled href="">home</AStyled>
            </LiStyled>
            <LiStyled>
              <AStyled href="">profiles</AStyled>
            </LiStyled>
            <LiStyled>
              <AStyled href="">account</AStyled>
            </LiStyled>
          </UlStyled>
        </nav>
        <ButtonStyled className="logout" onClick={handleLogout}>logout</ButtonStyled>
      </HeaderStyled>
      <main>
        <H2Styled>Welcome to your profile!</H2Styled>
      </main>
    </>
  );
}
