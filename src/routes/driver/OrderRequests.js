import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userTag} from "../../components/MainTitle";
import {fetchOrders} from "../../reducers/ordersSlice";
import {beautyTime} from "../../components/orders/OrdersList";

import adult from '../../images/adult.png'
import children from '../../images/children.png'

function OrderRequests(props) {
    const user = useSelector(state => state.user)
    const requests = useSelector(state => state.orders.orders)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrders())
    },[dispatch])

    return (
    <main className="main">
        <div className="requests">
            <div className="requests__header">
                <h2 className="requests__title">Заявки</h2>
                {userTag(user)}
            </div>
            <div className="requests__body">
                <div className="requests__head head">
                    <p className="head__column">Дата поездки</p>
                    <p className="head__column">Откуда</p>
                    <p className="head__column">Куда</p>
                    <p className="head__column">Пассажиры</p>
                    <p className="head__column">Ваше предложение</p>
                </div>
                {requests.map(request=> (
                <div className="requests__request request">
                    <p className="request__item">{beautyTime(request.departure_time,'time')}</p>
                    <p className="request__item">{request.from_location}</p>
                    <p className="request__item">{request.to_location}</p>
                    <div className="request__item item">
                        <div className="item__passenger">
                            <img className="passenger__image" src={adult}/>
                            <p className="passenger__count">x {request.men_amount}</p>
                        </div>
                        <div className="item__passenger">
                            <img className="passenger__image" src={children}/>
                            <p className="passenger__count">x {request.children_amount}</p>
                        </div>
                    </div>
                    <div className="request__item">

                    </div>
                </div>
                ))}
            </div>
        </div>
    </main>
    );
}

export default OrderRequests;