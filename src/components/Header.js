import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../reducers/userSlice";

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const handleLogout = () => {
        dispatch(unAuthorize())
    }

    return (
    <header className={'header'}>
        <NavLink to={'/'} className="header__title">TRANSFER ABKHAZIA</NavLink>
        <nav className="header__nav">
            {user.status==='Авторизован' && <a href="" className="logout" onClick={handleLogout}>Выйти</a>}
        </nav>
    </header>
    )
}

export default Header