import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {orderDetail} from "../../reducers/ordersSlice";
import {beautyTime} from "./OrdersList";
import {userTag} from "../MainTitle";
import arrow from '../../images/arrow.png'
import NoResponses from "./NoResponses";

export const getDuration = (timeString) => {
    const [hoursStr, minutesStr] = timeString.split(":");
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return `${hours} ч.` + (minutes > 0 ? ` ${minutes} мин.` : '');
}

function OrderDetail(props) {
    const { id } = useParams();

    const order = useSelector(state => state.orders?.currentOrder)
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(orderDetail(id))
    }, [dispatch])

    console.log(order)

    const responses = order?.driver_responses

    return (
        <main className={'main'}>
            <div className="orderDetail">
                <div className="orderDetail__header">
                    <div className="header__route">
                        <NavLink className={'link'} to={'/user/upcomingOrders'}>Предстоящие</NavLink>
                        <p className={'orderDetail__separator'}>/</p>
                        <NavLink className={'link'} to={`/user/upcomingOrders/${id}`}>Заявка №{id}</NavLink>
                    </div>
                    {userTag(user.username)}
                </div>
                <div className="orderDetail__body">
                    <h3 className="order__datetime">Рейс №{order?.order_id}. {beautyTime(order?.departure_time,'time')}</h3>
                    <div className="orderDetail__route route">
                        <div className="route__column column">
                            <div className="column__points">
                                <p className="point point_a">A</p>
                                <div className="point__place">{order?.from_location}</div>
                            </div>
                            <img className={'column__arrow'} src={arrow}/>
                            <div className="column__points">
                                <p className="point point_b">B</p>
                                <div className="point__place">{order?.to_location}</div>
                            </div>
                        </div>
                        <div className="route__column column">
                            <a href="" className="column__action link">Отменить</a>
                        </div>
                    </div>
                    <div className="orderDetail__about">
                        <p className="about__row">Количество взрослых: {order?.men_amount}</p>
                        <p className="about__row">Количество детей: {order?.children_amount}</p>
                        <p className="about__row">Комментарий к заказу: {order?.comment}</p>
                        <p className="about__row">Создан: {beautyTime(order?.created_at)}</p>
                        <p className="about__row">Комментарий к заказу: {order?.comment}</p>
                    </div>
                    {responses?.length > 0 ? <div className={'orderDetail__responses responses'}>
                        <h2 className="responses__title">Доступные водители</h2>
                        {responses.map(response => {
                            const car = response?.driver?.car

                            return <div className={'response'} key={response.id}>
                                <img className={'response__carPhoto'} src={car?.car_photo_path}/>
                                <div className="response__description">
                                    <p className="response__carName">{car?.name}</p>
                                    <p className="response__duration">Длительность поездки: {getDuration(response?.duration)}</p>
                                    <p className="response__duration">Стоимость: {response?.price} р.</p>
                                </div>
                            </div>
                        })}
                    </div> : <NoResponses/>}
                </div>
            </div>
        </main>
    );
}

export default OrderDetail;