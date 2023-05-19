import React from "react";
import {NavLink} from "react-router-dom";

const MainTitle = () => {

    return (
    <div className={'aboutUs'}>
        <h1 className="aboutUs__title">Трансфер между Абхазией и Россией</h1>
        <NavLink to={'auth'}>Войти</NavLink>
    </div>
    )
}

export default MainTitle