import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
        <div className={s.logo}>
          <img src="https://www.freelogodesign.org/Content/img/logo-samples/landscaping.png" alt="logo" />
        </div>
      </header>
    )

}

export default Header;