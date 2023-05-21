import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {orderDetail} from "../../reducers/ordersSlice";
import {beautyTime} from "./OrdersList";
import {userTag} from "../MainTitle";
import arrow from '../../images/arrow.png'

function OrderDetail(props) {
    const { id } = useParams();

    const order = useSelector(state => state.orders?.currentOrder)
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(orderDetail(id))
    }, [dispatch])

    console.log(order)

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
                    <h3 className="order__datetime">{beautyTime(order?.departure_time,'time')}</h3>
                    <div className="orderDetail__order order">
                        <div className="order__column column">
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
                        <div className="order__column column">
                            <a href="" className="column__action link">Отменить</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrderDetail;