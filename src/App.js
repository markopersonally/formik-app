import React, { useState } from "react";
import Header from "./components/Header.jsx";
import LogInForm from "./components/LogIn.jsx";
import RegisterForm from "./components/Register.jsx";
import styled from "styled-components";

const DivFormsStyled = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  background-color: #f5deb3;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleToggle = () => {
    setShowRegister((prevShowRegister) => !prevShowRegister);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setShowRegister(false);
  };

  return (
    <div className="App">
      {isLoggedIn && <Header />}
      <DivFormsStyled>
        {showRegister ? (
          <RegisterForm handleRegister={handleRegister} />
        ) : (
          <LogInForm handleToggle={handleToggle} onLogin={handleLogin} />
        )}
      </DivFormsStyled>
    </div>
  );
}

export default App;
