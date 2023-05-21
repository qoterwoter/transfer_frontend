import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {makeOrder} from "../../reducers/ordersSlice";
import toast from "react-hot-toast";

const emojiReg = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g

function MakeOrder(props) {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [departure, setDeparture] = useState('')
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [comment, setComment] = useState('')

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
            departure_time: departure,
            men_amount: adults,
            children_amount: children,
            comment
        }

        for(let key in data) {
            const item = String(data[key])
            if (item.match(emojiReg)) {
                toast.error('Нельзя использовать эмодзи!')
                return
            }
        }

        if (from.length < 3 || to.length < 3) {
            toast.error('Заполните адреса')
            return
        }

        if (departure.length < 15) {
            toast.error('Заполните дату и время отправления')
            return
        }

        dispatch(makeOrder(data))
    }

    return (
    <main className="main">
        <form className={'makeOrder__form form'} onSubmit={onSubmit}>
            <div className="form__header">
                <h2 className="order__title">Заказ</h2>
            </div>
            <div className="form__body">

                <label className={'form__label'} htmlFor={'from'}>Откуда</label>
                <input className={'form__input'} type={'text'} id={'from'} placeholder={'Адрес, Аэропорт, Отель'} value={from} onChange={onChangeFrom}/>

                <label className={'form__label'} htmlFor={'to'}>Куда</label>
                <input className={'form__input'} type={'text'} id={'to'} placeholder={'Адрес, Аэропорт, Отель'} value={to} onChange={onChangeTo}/>

                <label className={'form__label'} htmlFor={'departure'}>Дата отправления</label>
                <input className={'form__input'} id={'departure'} type="datetime-local" value={departure} onChange={onChangeDeparture}/>

                <label className={'form__label'} htmlFor={'adults'}>Количество взрослых</label>
                <input className={'form__input'} id={'adults'} type='number' value={adults} onChange={onChangeAdults}/>

                <label className={'form__label'} htmlFor={'children'}>Количество детей</label>
                <input className={'form__input'} id={'children'} type='number' value={children} onChange={onChangeChildren}/>

                <label className={'form__label'} htmlFor={'comment'}>Комментарий к заказу</label>
                <textarea className={'form__textarea'} id={'comment'} placeholder={'Комментарий'} value={comment} onChange={onChangeComment} rows={6}/>
            </div>
            <div className="form__footer">
                <input className={'form__input form__input_submit'} type={'submit'} value={"Заказать"}/>
            </div>
        </form>
    </main>
    );
}

export default MakeOrder;