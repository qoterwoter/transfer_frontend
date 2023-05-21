import React from "react";
import MainTitle from "../components/MainTitle";
import Features from "../components/general/Features";
import Feedbacks from "../components/general/Feedbacks";
import FeedbackForm from "../components/general/FeedbackForm";
import {useSelector} from "react-redux";

const Main = () => {
    const user = useSelector(state => state.user)

    const features = [
        {
            title: 'Нет скрытых цен',
            description: 'Ожидание в аэропорту,  очередь на границах уже включены' +
                ' в стоимость поездки и не зависят от времени.'
        },
        {
            title: 'Безопасные поездки',
            description: 'Вы заранее знаете, кто будет вашим водителем и вы ' +
                'можете выбирать водителя по своим критериям при оформлении заявки. '
        },
        {
            title: 'Гарантия лучшей цены',
            description: 'Вы можете предлагать свою цену. Либо выбирать ту цену,' +
                ' которую вам предложил водитель. На заявку может откликаться сразу' +
                ' несколько водителей, потому вы сможете выбрать самое выгодное предложение.'
        },

    ]

    return (
    <>
        <MainTitle/>
        <main className="main">
            <div className="general">
                <div className="general__features features">
                    {features.map((feature, id) => <Features feature={feature} key={`feature${id}`}/>)}
                </div>
                <Feedbacks/>
                {user.status==='Авторизован' &&<FeedbackForm/>}
            </div>
        </main>
    </>
    )
}

export default Main
