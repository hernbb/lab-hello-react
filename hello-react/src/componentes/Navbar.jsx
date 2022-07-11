import React from "react";
import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"

function Navbar(){
   return (
    <nav className="nav">
        <img src={logo} alt="logo" className="App-logo"/>
        <img  src={menu} alt="menu" className="menu"/>
    </nav>
) 
}
export default Navbar;