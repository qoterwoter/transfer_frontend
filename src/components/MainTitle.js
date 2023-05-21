import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export const userTag = (username) => {
    return <p className={'userTag'}>{username}</p>

}

const MainTitle = () => {
    const user = useSelector(state => state.user)

    return (
    <div className={'mainTitle'}>
        {user.status === 'Не авторизован' && <div className={'mainTitle__actions actions'}>
            <NavLink className={'link'} to={'auth'}>Вход</NavLink>
            <p className={'actions__separator'}>/</p>
            <NavLink className={'link'} to={'register'}>Регистрация</NavLink>
        </div>}
        {user.status === 'Авторизован' && <>
            {userTag(user.username)}
        </>}
        <h1 className="mainTitle__title">Трансфер между <br/> Абхазией и Россией</h1>
    </div>
    )
}

export default MainTitle