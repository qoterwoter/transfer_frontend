import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const MainTitle = () => {
    const user = useSelector(state => state.user)

    return (
    <div className={'aboutUs'}>
        <h1 className="aboutUs__title">Трансфер между Абхазией и Россией</h1>
        {user.status === 'Не авторизован' && <NavLink to={'auth'}>Войти</NavLink>}
        {user.status === 'Авторизован' && <>
            <NavLink to={'/order'}>Сделать заказ</NavLink>
        </>}
    </div>
    )
}

export default MainTitle