import React, { useState } from "react";
import Home from "./components/Home.jsx";
import LogInForm from "./components/LogIn.jsx";
import RegisterForm from "./components/Register.jsx";
import styled from "styled-components";

const DivFormsStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  background-color: #f5deb3;
  border-radius: 20px;
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [hideLogin, setHideLogin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleToggle = () => {
    setShowRegister((prevShowRegister) => !prevShowRegister);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setHideLogin(true);
  };

  const handleRegister = () => {
    setShowRegister(false);
    setIsRegistered(true);
    setHideLogin(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setHideLogin(false);
    setIsRegistered(false);
  };

  return (
    <div className="App">
      {(isLoggedIn || isRegistered) && <Home handleLogout={handleLogout} />}
      <DivFormsStyled>
        {!hideLogin &&
          (showRegister ? (
            <RegisterForm handleRegister={handleRegister} handleToggle={handleToggle} />
          ) : (
            <LogInForm onLogin={handleLogin} handleToggle={handleToggle}/>
          ))}
      </DivFormsStyled>
    </div>
  );
}

export default App;
