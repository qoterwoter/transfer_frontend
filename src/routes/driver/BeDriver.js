import React from 'react';
import prices from "../../images/prices.png";
import safety from "../../images/safety.png";
import best from "../../images/best.png";
import Features from "../../components/general/Features";

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
        <main className="main">
            <div className="general">
                <div className="general__features features">
                    {features.map((feature, id) => <Features feature={feature} key={`feature${id}`}/>)}
                </div>
            </div>
        </main>
    );
}

export default BeDriver;