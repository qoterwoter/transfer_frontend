import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import MainMenu from "./MainMenu";
import UserMenu from "./UserMenu";
import logo from '../../images/logo.png'

const Header = () => {
    const location = useLocation()

    const [classList, setClassList] = useState('')

    useEffect(() => {
        if (location.pathname.startsWith('/user')) {
            setClassList('header_user')
        } else {
            setClassList('')
        }
    }, [location])


    return (
    <header className={'header ' + classList}>
        <NavLink to={'/'} className="header__title">
            <img className={'header__logo'} src={logo}/>
        </NavLink>
        <nav className={'header__nav'}>
            {location.pathname.startsWith('/user') ? <UserMenu/> : <MainMenu/>}
        </nav>
    </header>
    )
}

export default Header