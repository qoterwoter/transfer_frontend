import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {unAuthorize} from "../../reducers/userSlice";

import homeIcon from '../../images/icons/home.png'
import feedbacksIcon from '../../images/icons/feedbacks.png'
import questionsIcon from '../../images/icons/questions.png'
import truckIcon from '../../images/icons/truck.png'
import profileIcon from "../../images/icons/profile.png";
import logoutIcon from "../../images/icons/logout.png";

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
        <NavLink className="menu__link link" to={'/'}>
            <img className={'menu__icon'} alt={'icon'} src={homeIcon}/>
            Главная
        </NavLink>
        {user.status === 'Авторизован' &&
            (user.is_staff ?
                <NavLink to={'/driver/requests'} className="menu__link">
                    <img className={'menu__icon'} src={homeIcon}/>
                    Мой кабинет
                </NavLink> :
                <NavLink to={'/user/upcomingOrders'} className="menu__link">
                    <img className={'menu__icon icon icon_light'} alt={'icon'} src={profileIcon}/>
                    Мой кабинет
                </NavLink>)
        }
        {user.status !== 'Авторизован' &&
            <NavLink className="menu__link link" to={'beDriver'}>
                <img className={'menu__icon'} src={truckIcon}/>
                Стать перевозчиком
            </NavLink>}
            <a className="menu__link link" href={'#feedback'}>
                <img className={'menu__icon'} src={feedbacksIcon}/>
                Отзывы
            </a>
            <NavLink className="menu__link link" to={'questions'}>
                <img className={'menu__icon'} src={questionsIcon}/>
                Вопросы и ответы
            </NavLink>
        {user.status ==='Авторизован' &&
            <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>
                <img className={'menu__icon icon icon_light'} alt={'icon'} src={logoutIcon}/>
                Выйти
            </a>}
    </>
    );
}

export default MainMenu;