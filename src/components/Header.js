import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {unAuthorize} from "../reducers/userSlice";

const Header = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(unAuthorize())
    }

    return (
    <header className={'header'}>
        <NavLink to={'/'} className="header__title">TRANSFER ABKHAZIA</NavLink>
        <nav className="header__nav">
            <a href="" className="logout" onClick={handleLogout}>Выйти</a>
        </nav>
    </header>
    )
}

export default Header