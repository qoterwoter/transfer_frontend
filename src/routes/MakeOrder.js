import React, {useState} from 'react';

function MakeOrder(props) {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [arrive, setArrive] = useState('')
    const [departure, setDeparture] = useState('')

    const onChangeArrive = (e) => setArrive(e.target.value)

    return (
    <div className={'order'}>
        <h2 className="order__title">Заказ</h2>
        <input type="datetime-local" value={arrive} onChange={onChangeArrive}/>
    </div>
    );
}

export default MakeOrder;