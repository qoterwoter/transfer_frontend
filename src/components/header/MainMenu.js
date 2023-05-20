import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../reducers/userSlice";

function MainMenu(props) {
    const user = useSelector(state => state.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(unAuthorize())
        navigate('/')
    }

    return (
    <>
        <NavLink className="menu__link link" to={'/'}>Главная</NavLink>
        {user.status === 'Авторизован' && <NavLink to={'/user/create'} className="menu__link">Мой кабинет</NavLink>}
        <NavLink className="menu__link link" to={'/user/create'}>Стать перевозчиком</NavLink>
        <NavLink className="menu__link link" to={'/user/create'}>Для бизнеса</NavLink>
        <NavLink className="menu__link link" to={'/user/create'}>Отзывы</NavLink>
        <NavLink className="menu__link link" to={'/user/create'}>Вопросы и ответы</NavLink>
        {user.status==='Авторизован' && <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>Выйти</a>}
    </>
    );
}

export default MainMenu;