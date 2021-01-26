import React, { useEffect, useState } from 'react';
import { ContainerHeader, Logo, Buttons } from './styled';

import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';


function Header() {
  const history = useHistory()

  const [loginLogout, setLoginLogout] = useState("")

  useEffect(() => {
    handleLoginLogout()
  },[loginLogout])

  const handleLoginLogout = () => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      setLoginLogout("login")
    } else {
      setLoginLogout("logout")
    }
  }

  const handleLogin = () => {
    history.push("/login");
  }

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/login");
  }

  const handleSignup = () => {
    history.push("/signup");
  }

  return (
      <ContainerHeader>
          <div></div>
          <Logo>
            <h1>SpotDy</h1>
          </Logo>
          <Buttons>
            { loginLogout === "login" ? <Button onClick={handleLogin} color="secondary">Login</Button> : <span></span>}
            { loginLogout === "login" ? <Button onClick={handleSignup} color="secondary">Signup</Button> : <span></span>}
            { loginLogout === "logout" ? <Button onClick={handleLogout} color="secondary">Logout</Button> : <span></span>}
          </Buttons>
      </ContainerHeader>
  )
}

export default Header;