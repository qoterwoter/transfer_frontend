import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCar} from "../../reducers/carSlice";
import {userTag} from "../../components/MainTitle";
import CarInput from "../../components/profile/CarInput";

function Car(props) {
    const car = useSelector(state => state.car)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const carStatuses = {
        on_moderate: 'На обработке',
        moderating: 'В обработке',
        approved: 'Одобрено',
    }

    useEffect(() => {
        dispatch(fetchCar())
    }, [dispatch])

    return (
    <main className={'main'}>
        <div className="car">
            <div className="car__header">
                <h2 className="car__title">Моё авто</h2>
                {userTag(user)}
            </div>
            <div className="car__body">
                <CarInput
                    id={'name'}
                    value={car.name}
                    label={'Название машины'}
                    placeholder={'Mercedes'}
                    type={'text'}
                />
                <CarInput
                    id={'car_photo_path'}
                    value={car.car_photo_path}
                    label={'Фотография машины'}
                    placeholder={'url'}
                    type={'file'}
                />
                <CarInput
                    id={'photo_with_car_pass'}
                    value={car.photo_with_car_pass}
                    label={'Фото с правами'}
                    placeholder={'Регистрация'}
                    type={'file'}
                />
                <CarInput
                    id={'car_pass'}
                    value={car.car_pass}
                    label={'Регистрация ТС'}
                    placeholder={'Регистрация'}
                    type={'file'}
                />
                <CarInput
                    id={'taxi_license'}
                    value={car.taxi_license}
                    label={'Лицензия на перевозку пассажиров'}
                    placeholder={'Лицензия'}
                    type={'file'}
                />
                <p className={'car__status'}>Статус машины: {carStatuses[car.car_status]}</p>
            </div>
        </div>
    </main>
    );
}

export default Car;