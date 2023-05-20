import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {makeRequest} from "../../reducers/supportSlice";

function MakeRequest(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onChangeTitle = e => setTitle(e.target.value);
    const onChangeDescription = e => setDescription(e.target.value);

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(makeRequest({title, description}))
    }

    return (
    <form className={'support__form form'} onSubmit={onSubmit}>
        <h2 className={'form__title'}>Оставить запрос</h2>

        <label className={'form__label'} htmlFor={'title'}>Заголовок</label>
        <input className={'form__input'} id={'title'} value={title} onChange={onChangeTitle}/>

        <label className={'form__label'} htmlFor={'description'}>Описание</label>
        <textarea className={'form__input'} id={'description'} value={description} onChange={onChangeDescription} rows={6}/>

        <input className={'form__submit'} type={'submit'} value={'Отправить запрос'}/>
    </form>
    );
}

export default MakeRequest;