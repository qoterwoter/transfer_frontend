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
        <NavLink className="menu__link link" to={'/'}>ГЛАВНАЯ</NavLink>
        {user.status === 'Авторизован' &&
            (user.is_staff ? <NavLink to={'/driver/requests'} className="menu__link">МОЙ КАБИНЕТ</NavLink> :
                <NavLink to={'/user/upcomingOrders'} className="menu__link">МОЙ КАБИНЕТ</NavLink>)
        }
        {user.status !== 'Авторизован' && <NavLink className="menu__link link" to={'registerDriver'}>СТАТЬ ПЕРЕВОЗЧИКОМ</NavLink>}
        <a className="menu__link link" href={'#feedback'} >ОТЗЫВЫ</a>
        <NavLink className="menu__link link" to={'questions'}>ВОПРОСЫ И ОТВЕТЫ</NavLink>
        {user.status ==='Авторизован' && <a href="src/components/header/Header" className="menu__link" onClick={handleLogout}>ВЫЙТИ</a>}
    </>
    );
}

export default MainMenu;