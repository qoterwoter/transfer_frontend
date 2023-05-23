import React, {useState} from 'react';

function Question(props) {
    const question = props.question;

    const [isShow, setIsShow] = useState(false);

    const toggleIsShow = () => {
        setIsShow(!isShow);
    };

    return (
        <div className="questions__question question">
            <h3 className="question__title" onClick={toggleIsShow}>➤ {question.title}</h3>
            {question.isList ? (
                <ol
                    className={`question__list list ${
                        isShow ? 'list--show' : 'list--hide'
                    }`}
                >
                    {question.listItems.map((item, id) => (
                        <li className="list__item item" key={`item${id}`}>
                            {item}
                        </li>
                    ))}
                </ol>
            ) : (
                <p
                    className={`question__description ${
                        isShow ? 'description--show' : 'description--hide'
                    }`}
                >
                    {question.description}
                </p>
            )}
        </div>
    );
}

function Questions(props) {
    const questions = [
        {
            title: 'Как заказать поездку?',
            isList: true,
            listItems: [
                'Выберите место отправления и время прибытия.',
                'Заполните все поля о рейсе, количестве человек и дополнительной информации.',
                'Авторизуйтесь на сайте, если вы бронируете трансфер впервые, то зарегистрируйтесь.',
                'Дождитесь пока на вашу заявку откликнется одни или более водителей.',
                'Если вас устраивают условия по цене, то выбирайте водителя и в день поездки за вами приедет водитель от Transfer Abkhazia.'
            ]
        }, {
            title: 'Что входит в цену?',
            description: 'В цену входит вся поездки полностью, в том числе ожидание в аэропорту на' +
                ' случай если рейс задержится. '
        }, {
            title: 'Можно ли доверять водителям Transfer Abkhazia?',
            description: 'Все наши водителя прошли проверку. Принимать заказы могут' +
                ' только те водители, которые подтвердили свои документы. Так же клиенты' +
                ' могут ставить оценку водителям и есть у водителя низкая оценка или на него' +
                ' есть жалобы, то мы можем заблокировать его на нашем сервисе.',
        }
    ]

    return (
    <div className={'questions'}>
        <h2 className="questions__title">Вопросы и ответы</h2>
        {questions.map(question => <Question question={question}/>)}
    </div>
    );
}

export default Questions;