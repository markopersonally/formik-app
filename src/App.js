import Header from "./components/Header.jsx";
import LogInForm from "./components/LogIn.jsx";

import styled from "styled-components";

const DivFormsStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f5deb3;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <DivFormsStyled>
        <LogInForm />
      </DivFormsStyled>
    </div>
  );
}

export default App;
