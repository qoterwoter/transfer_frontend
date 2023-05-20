import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import OrderItem from "./OrderItem";

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
        {orders.map((order, id) => {

            const row = <>
                <p className="row__item">{beautyTime(order.created_at)}</p>
                <p className="row__item">{beautyTime(order.arrive_time)}</p>
                <p className="row__item">{order.from_location}</p>
                <p className="row__item">{order.to_location}</p>
            </>
        return <OrderItem orderId={order.id} className={'orders__order order'} key={`order${id}`} row={row}/>
        })}
    </>
    );
}

export default OrdersList;