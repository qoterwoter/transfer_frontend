import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userTag} from "../../components/MainTitle";
import {fetchOrders} from "../../reducers/ordersSlice";

import Request from "./Request";
import {useLocation} from "react-router-dom";

function OrderRequests(props) {
    const user = useSelector(state => state.user)
    const requests = useSelector(state => state.orders.orders)

    const [data, setData] = useState([...requests])

    const location = useLocation()

    const dispatch = useDispatch()

    const isRequests = location.pathname.endsWith('requests')

    const [sortBy, setSortBy] = useState('dateCreate')
    const [sortedOrders, setSortedOrders] = useState([])

    useEffect(() => {
        if(isRequests) {
            const filteredRequest = requests.filter(request => request?.response?.status!=='a')
            setData([...filteredRequest])
        } else {
            const drives = requests?.filter(request => (request?.response?.status === 'a'))
            setData([...drives])
        }
    }, [location, requests])

    useEffect( () => {
        dispatch(fetchOrders())
    },[dispatch])

    useEffect(() => {
        setSortedOrders([...data])
    }, [data])

    useEffect(() => {
        if(sortBy==='dateCreate') {
            setSortedOrders([...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)))
        }
        if(sortBy==='dateDeparture') {
            setSortedOrders([...data].sort((a, b) => new Date(a.departure_time) - new Date(b.departure_time)))
        }
    }, [sortBy, data])

    const sortByCreate = () => {setSortBy('dateCreate')}
    const sortByDeparture = () => {setSortBy('dateDeparture')}

    return (
    <div className="requests">
        <div className="requests__header">
            <div className="header__title">
                <h2 className="requests__title">{isRequests ? 'Заявки' : "Поездки"}</h2>
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
        <div className={"requests__body " + (!isRequests && 'request__order')}>
            <div className={"requests__head head "}>
                <p className="head__column">Дата поездки</p>
                <p className="head__column">Откуда</p>
                <p className="head__column">Куда</p>
                <p className="head__column">Пассажиры</p>
                <p className="head__column">Заказчик</p>
                <p className="head__column">{isRequests ? 'Ваше предложение' : "Стоимость"}</p>
            </div>
            {sortedOrders.map(request=> (
                <Request request={request} key={`request${request.id}`}/>
            ))}
        </div>
    </div>
    );
}

export default OrderRequests;