import React from 'react';
import prices from "../../images/orders.png";
import safety from "../../images/calendar.png";
import best from "../../images/more.png";
import Features from "../../components/general/Features";
import {NavLink} from "react-router-dom";



function BeDriver(props) {
    const features = [
        {
            title: 'Начни принимать заказы',
            description: 'Зарегистрируйтесь бесплатно на нашем веб-сайте и начните заниматься перевозками, используя наш сервис, который связывает водителей и пассажиров через веб-платформу. Предлагайте конкурентные цены и привлекайте лучших клиентов.',
            image: prices
        },
        {
            title: 'Сами планируйте объем работы',
            description: 'Работайте на себя и зарабатывайте сколько хотите. Поездки бронируются заранее, вы можете выбрать те, которые подходят под ваши планы. Мы уведомим вас о новых заказах. ',
            image: safety
        },
        {
            title: 'Предлагайте больше ',
            description: 'Предлагайте хорошие цены и зарабатывайте с нами. Принимайте столько заявок, сколько сможете обработать — нет ни минимальных, ни максимальных ограничений. Предложения прозрачны, никаких скрытых платежей.',
            image: best
        },
    ]

    return (
        <div className="general">
            <div className="general__features features">
                <div className="features__header">
                    <h2 className={'header__title'}>Зарабатывайте больше с Transfer Abkhazia!</h2>
                    <NavLink className={'header__action'} to={'/registerDriver'}>Регистрация</NavLink>
                </div>
                {features.map((feature, id) => <Features feature={feature} key={`feature${id}`}/>)}
            </div>
        </div>
    );
}

export default BeDriver;