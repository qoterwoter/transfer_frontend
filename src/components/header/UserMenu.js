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
        <NavLink className="menu__link link" to={'/'}>Главная</NavLink>
        <NavLink className="menu__link link" to={'/user/create'}>Создать</NavLink>
        <NavLink className="menu__link link" to={'/user/orders'}>Предстоящие</NavLink>
        <NavLink className="menu__link link" to={'/'}>Прошедшие</NavLink>
        <NavLink className="menu__link link" to={'/'}>Написать отзыв</NavLink>
        <NavLink className="menu__link link" to={'/'}>Настройки профиля</NavLink>
        <NavLink className="menu__link link" to={'/'}>Техническая поддержка</NavLink>
        {user.status==='Авторизован' && <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>Выйти</a>}
    </>
    );
}

export default UserMenu;