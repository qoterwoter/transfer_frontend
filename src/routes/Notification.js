import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getNotificationStatus, updateNotificationStatus} from "../reducers/driverSlice";

function Notification(props) {
    const notification = useSelector(state => state.driver?.notifications)

    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotificationStatus())
    }, [dispatch])

    const onChange = () => {
        dispatch(updateNotificationStatus(!value))
        setValue(!value)
    }

    useEffect(() => {
        setValue(!!notification)
    }, [notification])

    return (
    <div className={'notification'}>
        <h2>Уведомления</h2>
        <p>Вы {value ? '' : 'не'} получаете уведомления</p>
        <label htmlFor={'notification'}>Получать уведомления о новых заказах на электронную почту</label>
        <input
            id={'notification'}
            type={'checkbox'}
            checked={value}
            onChange={onChange}
        />
    </div>
    );
}

export default Notification;