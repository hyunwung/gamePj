import React, { useState } from "react"
import "./Header.scss"
import logo from "../../assets/example.jpg"
import LoginModal from "../modal/LoginModal"
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
  const [login,setLogin] = useState(false)
  const handleLogin = () => {
    setLogin((prev)=>!prev)
  }
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
        </div>
        <div className="header-center">
          <img src={logo} className="header-logo"></img>
        </div>
        <div className="header-right">
          <div className="login-link" onClick={handleLogin}>Login</div>
          {login ? <LoginModal setLogin={setLogin}></LoginModal> : null} 
        </div>
      </div>
    </div>
  )
}

export default Header