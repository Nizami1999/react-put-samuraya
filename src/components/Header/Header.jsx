import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = props => {
  debugger;
  return (
    <header className={s.header}>
      <div className={s.logo}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
