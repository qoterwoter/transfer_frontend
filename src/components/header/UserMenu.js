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
        <NavLink className="menu__link link" to={'create'}>СОЗДАТЬ</NavLink>
        <NavLink className="menu__link link" to={'upcomingOrders'}>ПРЕДСТОЯЩИЕ</NavLink>
        <NavLink className="menu__link link" to={'pastOrders'}>ПРОШЕДШИЕ</NavLink>
        <NavLink className="menu__link link" to={{pathname: '/', hash: '#feedback'}}>НАПИСАТЬ ОТЗЫВ</NavLink>
        <NavLink className="menu__link link" to={'profile'}>НАСТРОЙКИ ПРОФИЛЯ</NavLink>
        <NavLink className="menu__link link" to={'support'}>ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</NavLink>
        {user.status==='Авторизован' && <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>ВЫЙТИ</a>}
    </>
    );
}

export default UserMenu;