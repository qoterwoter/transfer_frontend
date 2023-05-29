import React from 'react';
import {unAuthorize} from "../../reducers/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

function UserMenu(props) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(unAuthorize())
        navigate('/')
    }

    return (
        <>
            <NavLink className="menu__link link" to={'/'}>ГЛАВНАЯ</NavLink>
            <NavLink className="menu__link link" to={'requests'}>ЗАКАЗЫ</NavLink>
            <NavLink className="menu__link link" to={'orders'}>ПОЕЗДКИ</NavLink>
            <NavLink className="menu__link link" to={'profile'}>МОИ ДАННЫЕ</NavLink>
            <NavLink className="menu__link link" to={'car'}>МОЁ АВТО</NavLink>
            <NavLink className="menu__link link" to={'support'}>ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</NavLink>
            {user.status==='Авторизован' && <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>ВЫЙТИ</a>}
        </>
    );
}

export default UserMenu;