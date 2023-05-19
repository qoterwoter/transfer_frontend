import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
    <header className={'header'}>
        <NavLink to={'/'} className="header__title">TRANSFER ABKHAZIA</NavLink>
        <nav className="header__nav">

        </nav>
    </header>
    )
}

export default Header