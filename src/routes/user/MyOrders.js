import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchOrders, fetchRatings} from "../../reducers/ordersSlice";
import OrdersList from "../../components/orders/OrdersList";
import {useLocation} from "react-router-dom";
import {userTag} from "../../components/MainTitle";

function MyOrders(props) {
    const orders = useSelector(state => state.orders.orders)
    const ratings = useSelector(state => state.orders.ratings)

    const user = useSelector(state => state.user)

    const [sortBy, setSortBy] = useState('dateCreate')
    const [sortedOrders, setSortedOrders] = useState([])

    const dispatch = useDispatch()
    const location = useLocation()

    const addRating = (order) => {
        const rating = ratings.find(rating => rating.order === order.id)
        if(rating) {
            return {...order, rating}
        } else
            return order
    }

    useEffect(() => {
        setSortedOrders([...orders])
    }, [orders])

    useEffect(() => {
        if(sortBy==='dateCreate') {
            setSortedOrders([...orders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))
        }
        if(sortBy==='dateDeparture') {
            setSortedOrders([...orders].sort((a, b) => new Date(a.departure_time) - new Date(b.departure_time)))
        }
    }, [sortBy, orders])

    const sortByCreate = () => {setSortBy('dateCreate')}
    const sortByDeparture = () => {setSortBy('dateDeparture')}

    const ends = location.pathname.endsWith('upcomingOrders')

    useEffect( () => {
        dispatch(fetchOrders())
        dispatch(fetchRatings())
    },[dispatch])

    return (
    <section className={'orders'}>
        <div className="orders__header">
            <div className="header__title">
                <h2 className="orders__title">{ends ? 'Предстоящие' : "Прошедшие"}</h2>
                {userTag(user)}
            </div>
            <form className="orders__sort">
                <h3 className="sort__title">Сортировать по</h3>
                <div className="sort__item">
                    <input
                        className={'sort__action'}
                        type={'radio'}
                        checked={sortBy === 'dateCreate'}
                        value={'dateCreate'}
                        name={'sort'}
                        id={'dateCreate'}
                        onClick={sortByCreate}
                    />
                    <label htmlFor={'dateCreate'}>Дата создания</label>
                </div>
                <div className="sort__item">
                    <input
                        className={'sort__action'}
                        type={'radio'}
                        value={'dateCreate'}
                        name={'sort'}
                        checked={sortBy === 'dateDeparture'}
                        id={'dateDeparture'}
                        onClick={sortByDeparture}
                    />
                    <label htmlFor={'dateDeparture'}>Дата поездки</label>
                </div>
            </form>
        </div>
        <div className="orders__order order">
            <p className="row__item">Дата создания</p>
            <p className="row__item">Дата поездки</p>
            <p className="row__item">Откуда</p>
            <p className="row__item">Куда</p>
        </div>
        {ends ? <>
            <OrdersList orders={sortedOrders.filter(order => {
                const now = new Date().valueOf()
                const orderDate = new Date(order.departure_time).valueOf()
                return orderDate >= now
            }).map(addRating)}/>
        </> : <>
            <OrdersList orders={sortedOrders.filter(order => {
                const now = new Date()
                const orderDate = new Date(order.departure_time)
                return orderDate < now
            }).map(addRating)}/>
        </>}
    </section>
    );
}

export default MyOrders;