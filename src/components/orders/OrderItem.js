import React, {useEffect, useRef, useState} from 'react';
import Rate from "./Rate";
import {NavLink, useLocation} from "react-router-dom";

function OrderItem(props) {
    const row = props.row
    const [isShow, setIsShow] = useState(false)

    const rating = props.rating

    const ref = useRef()

    const location = useLocation()

    const end = location.pathname.endsWith('pastOrders')

    const openRate = e => {
        setIsShow(true)
    }

    const closeRate = () => {
        setIsShow(false)
    }

    const handleClick = (event) => {
        if(ref && ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
            console.log('asd')
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [ref.current])
    return (
        <article className={'orders__order order'} ref={ref}>
            {row}
            {end ?
                !rating ? (
                    <a className='row__item row__item_choose link' onClick={openRate}>Оценить</a>
                    ) : (
                    <div className={'row__item row__item_filled'}>Оценено</div>
                ) :
                <NavLink className='row__item row__item_choose link' to={`${props.orderId}`}>Выбрать</NavLink>}
            {isShow && <Rate orderId={props.orderId} refer={ref} closeRate={closeRate}/>}
        </article>
    );
}

export default OrderItem;