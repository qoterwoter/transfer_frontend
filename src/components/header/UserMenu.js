import React from 'react';
import {unAuthorize} from "../../reducers/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import homeIcon from "../../images/icons/home.png";
import profileIcon from "../../images/icons/profile.png";
import calendarIcon from "../../images/icons/calendar.png";
import logoutIcon from "../../images/icons/logout.png";
import settingsIcon from "../../images/icons/settings.png";
import makeIcon from '../../images/icons/make.png'
import completedIcon from '../../images/icons/completed.png'
import feedbackIcon from '../../images/icons/feedback.png'

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
        <NavLink className="menu__link link" to={'/'}>
            <img className={'menu__icon icon icon_light'} alt={'icon'} src={homeIcon}/>
            Главная
        </NavLink>
        <NavLink className="menu__link link" to={'create'}>
            <img className={'menu__icon icon '} alt={'icon'} src={makeIcon}/>
            Создать
        </NavLink>
        <NavLink className="menu__link link" to={'upcomingOrders'}>
            <img className={'menu__icon icon '} alt={'icon'} src={calendarIcon}/>
            Предстоящие
        </NavLink>
        <NavLink className="menu__link link" to={'pastOrders'}>
            <img className={'menu__icon icon '} alt={'icon'} src={completedIcon}/>
            Прошедшие
        </NavLink>
        <NavLink className="menu__link link" to={{pathname: '/', hash: '#feedback'}}>
            <img className={'menu__icon icon '} alt={'icon'} src={feedbackIcon}/>
            Написать отзыв
        </NavLink>
        <NavLink className="menu__link link" to={'profile'}>
            <img className={'menu__icon icon '} alt={'icon'} src={profileIcon}/>
            Настройки профиля
        </NavLink>
        <NavLink className="menu__link link" to={'support'}>
            <img className={'menu__icon icon '} alt={'icon'} src={settingsIcon}/>
            Техническая поддержка
        </NavLink>
        {user.status==='Авторизован' && <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>
            <img className={'menu__icon icon '} alt={'icon'} src={logoutIcon}/>
            Выйти
        </a>}
    </>
    );
}

export default UserMenu;