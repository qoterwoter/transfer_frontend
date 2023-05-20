import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function MainMenu(props) {
    const user = useSelector(state => state.user)

    return (
    <>
        <NavLink className="menu__link" to={'/'}>Главная</NavLink>
        {user.status === 'Авторизован' && <NavLink to={'/user/create'} className="menu__link">Мой кабинет</NavLink>}
        <NavLink className="menu__link" to={'/user/create'}>Стать перевозчиком</NavLink>
        <NavLink className="menu__link" to={'/user/create'}>Для бизнеса</NavLink>
        <NavLink className="menu__link" to={'/user/create'}>Отзывы</NavLink>
        <NavLink className="menu__link" to={'/user/create'}>Вопросы и ответы</NavLink>
    </>
    );
}

export default MainMenu;