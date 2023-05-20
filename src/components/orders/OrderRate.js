import React, {useEffect, useRef, useState} from 'react';
import RateStars from "./RateStars";
import {useDispatch} from "react-redux";
import {setRate} from "../../reducers/ordersSlice";

function OrderRate(props) {
    const [communication, setCommunication] = useState(1)
    const [driver, setDriver] = useState(1)
    const [transport, setTransport] = useState(1)

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        const data = {
            order: props.orderId,
            communication_rating: communication,
            driver_rating: driver,
            transport_rating: transport,
        }
        dispatch(setRate(data))
    }

    return(
        <form className={'order__rate rate'} onSubmit={onSubmit}>
            <div className="rate__header">
                <h3 className="rate__title">Оценка заказа</h3>
                <h3 className="rate__close"onClick={props.closeRate}>x</h3>
            </div>
            <div className="rate__body">
                <p className="row__label">Коммуникабельность</p>
                <RateStars rating={communication} setRating={setCommunication}/>
                <p className="row__label">Водитель</p>
                <RateStars rating={driver} setRating={setDriver}/>
                <p className="row__label">Транспорт</p>
                <RateStars rating={transport} setRating={setTransport}/>
            </div>
            <div className="rate__footer">
                <input type={'submit'} value={'Отправить'}/>
            </div>
        </form>
    )
}

export default OrderRate;