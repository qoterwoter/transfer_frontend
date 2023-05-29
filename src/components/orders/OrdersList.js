import React from 'react';
import OrderItem from "./OrderItem";

export const beautyTime = (time, option) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    };

    if(option==='time') {
        options.hour = 'numeric'
        options.minute = 'numeric'
    }

    return new Date(time).toLocaleDateString('ru',options)
}

function OrdersList(props) {
    const orders = props.orders

    return (
    <>
    {orders.map((order, id) => {

        console.log(order)
        const row =
            <>
                <p className="row__item">{beautyTime(order.created_at)}</p>
                <p className="row__item">{beautyTime(order.departure_time)}</p>
                <p className="row__item">{order.from_location}</p>
                <p className="row__item">{order.to_location}</p>
            </>
        return <OrderItem rating={order.rating} orderId={order.id} className={'orders__order order'} key={`order${id}`} row={row}/>
    })}
    </>
    );
}

export default OrdersList;