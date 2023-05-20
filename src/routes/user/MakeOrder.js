import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {makeOrder} from "../../reducers/ordersSlice";

function MakeOrder(props) {
    const [from, setFrom] = useState('Москва, Внуково')
    const [to, setTo] = useState('Абхазия, Гагры')
    const [arrive, setArrive] = useState('')
    const [departure, setDeparture] = useState('')
    const [adults, setAdults] = useState(4)
    const [children, setChildren] = useState(4)
    const [comment, setComment] = useState('-')

    const onChangeArrive = (e) => setArrive(e.target.value)
    const onChangeFrom = e => setFrom(e.target.value)
    const onChangeTo = e => setTo(e.target.value)
    const onChangeDeparture = e => setDeparture(e.target.value)
    const onChangeAdults = e => setAdults(e.target.value)
    const onChangeChildren = e => setChildren(e.target.value)
    const onChangeComment = e => setComment(e.target.value)

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        const data = {
            from_location: from,
            to_location: to,
            arrive_time: arrive,
            departure_time: departure,
            men_amount: adults,
            children_amount: children,
            comment
        }

        dispatch(makeOrder(data))
    }

    return (
    <main className="main">
        <form className={'makeOrder__form form'} onSubmit={onSubmit}>
            <h2 className="order__title">Заказ</h2>
            <label className={'form__label'} htmlFor={'from'}>Откуда: адрес, аэропорт, отель</label>
            <input className={'form__input'} type={'text'} id={'from'} value={from} onChange={onChangeFrom}/>

            <label className={'form__label'} htmlFor={'to'}>Куда: адрес, аэропорт, отель</label>
            <input className={'form__input'} type={'text'} id={'to'} value={to} onChange={onChangeTo}/>

            <label className={'form__label'} htmlFor={'arrive'}>Дата прибытия</label>
            <input className={'form__input'} id={'arrive'} type="datetime-local" value={arrive} onChange={onChangeArrive}/>

            <label className={'form__label'} htmlFor={'departure'}>Дата отправления</label>
            <input className={'form__input'} id={'departure'} type="datetime-local" value={departure} onChange={onChangeDeparture}/>

            <label className={'form__label'} htmlFor={'adults'}>Количество взрослых</label>
            <input className={'form__input'} id={'adults'} type='number' value={adults} onChange={onChangeAdults}/>

            <label className={'form__label'} htmlFor={'children'}>Количество детей</label>
            <input className={'form__input'} id={'children'} type='number' value={children} onChange={onChangeChildren}/>

            <label className={'form__label'} htmlFor={'comment'}>Комментарий к заказу</label>
            <textarea className={'form__input'} id={'comment'} value={comment} onChange={onChangeComment} rows={6}/>

            <input type={'submit'} value={"Заказать"}/>
        </form>
    </main>
    );
}

export default MakeOrder;