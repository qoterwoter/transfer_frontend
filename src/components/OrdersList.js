import React from 'react';
import {NavLink} from "react-router-dom";

export const beautyTime = (time) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    };

    return new Date(time).toLocaleDateString('ru',options)
}

function OrdersList(props) {
    const orders = props.orders

    return (
    <>
        {orders.map(order => {
        return <article className={'orders__order order'}>
            <p className="row__item">Дата создания</p>
            <p className="row__item">Дата поездки</p>
            <p className="row__item">Откуда</p>
            <p className="row__item">Куда</p>
            <NavLink className='row__item row__item_choose' to={""}>Выбрать</NavLink>
            <p className="row__item">{beautyTime(order.created_at)}</p>
            <p className="row__item">{beautyTime(order.arrive_time)}</p>
            <p className="row__item">{order.from_location}</p>
            <p className="row__item">{order.to_location}</p>
        </article>
        })}
    </>
    );
}

export default OrdersList;