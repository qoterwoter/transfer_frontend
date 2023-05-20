import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders} from "../../reducers/ordersSlice";
import OrdersList from "../../components/OrdersList";

function MyOrders(props) {
    const orders = useSelector(state => state.orders)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrders())
    },[])

    return (
    <section className={'orders'}>
        <h2 className="orders__title">Предстоящие</h2>
        <OrdersList orders={orders.orders}/>
    </section>
    );
}

export default MyOrders;