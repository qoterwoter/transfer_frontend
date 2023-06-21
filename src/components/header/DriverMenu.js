import React from 'react';
import {unAuthorize} from "../../reducers/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";

import homeIcon from "../../images/icons/home.png";
import requestsIcon from '../../images/icons/requests.png'
import settingsIcon from '../../images/icons/settings.png'
import calendarIcon from '../../images/icons/calendar.png'
import profileIcon from '../../images/icons/profile.png'
import truckIcon from '../../images/icons/truck.png'
import logoutIcon from '../../images/icons/logout.png'
import notificationIcon from '../../images/icons/notification.png'


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
            <NavLink className="menu__link link" to={'notification'}>
                <img className={'menu__icon icon icon_light'} alt={'icon'} src={notificationIcon}/>
                Уведомления
            </NavLink>
            <NavLink className="menu__link link" to={'requests'}>
                <img className={'menu__icon icon '} alt={'icon'} src={requestsIcon}/>
                Заявки
            </NavLink>
            <NavLink className="menu__link link" to={'orders'}>
                <img className={'menu__icon icon '} alt={'icon'} src={calendarIcon}/>
                Поездки
            </NavLink>
            <NavLink className="menu__link link" to={'profile'}>
                <img className={'menu__icon icon '} alt={'icon'} src={profileIcon}/>
                Мои данные
            </NavLink>
            <NavLink className="menu__link link" to={'car'}>
                <img className={'menu__icon icon icon_light'} alt={'icon'} src={truckIcon}/>
                Мое авто
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