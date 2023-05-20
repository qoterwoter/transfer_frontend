import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const MainTitle = () => {
    const user = useSelector(state => state.user)

    return (
    <div className={'aboutUs'}>
        {user.status === 'Не авторизован' && <div className={'aboutUs__actions actions'}>
            <NavLink className={'link'} to={'auth'}>Вход</NavLink>
            <p className={'actions__separator'}>/</p>
            <NavLink className={'link'} to={'register'}>Регистрация</NavLink>
        </div>}
        {user.status === 'Авторизован' && <>
            <NavLink to={'/user'}>Сделать заказ</NavLink>
        </>}
        <h1 className="aboutUs__title">Трансфер между <br/> Абхазией и Россией</h1>
    </div>
    )
}

export default MainTitle