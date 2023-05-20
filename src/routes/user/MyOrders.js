import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../../reducers/ordersSlice";
import OrdersList from "../../components/orders/OrdersList";
import {useLocation} from "react-router-dom";

function MyOrders(props) {
    const orders = useSelector(state => state.orders)

    const dispatch = useDispatch()
    const location = useLocation()

    const ends = location.pathname.endsWith('upcomingOrders')

    useEffect(() => {
        dispatch(fetchOrders())
    },[dispatch])

    return (
    <main className="main">
        <section className={'orders'}>
            {ends ? <>
                <h2 className="orders__title">Предстоящие</h2>
                <OrdersList orders={orders.orders.filter(order => {
                    const now = new Date().valueOf()
                    const orderDate = new Date(order.arrive_time).valueOf()
                    console.log(orderDate > now)
                    return orderDate >= now
                })}/>
            </> : <>
                <h2 className="orders__title">Прошедшие</h2>
                <OrdersList orders={orders.orders.filter(order => {
                    const now = new Date()
                    const orderDate = new Date(order.arrive_time)
                    return orderDate < now
                })}/>
            </>}
        </section>
    </main>
    );
}

export default MyOrders;