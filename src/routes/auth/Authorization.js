import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../reducers/userSlice";

function Authorization(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const auth = (e) => {
        e.preventDefault()

        dispatch(authUser({username, password}))
        console.log(username, password)
    }

    return (
        <div className={'auth'}>
            <h2 className="auth__title">Вход</h2>
            <form className="auth__form form" onSubmit={auth}>
                <label className={'form__label'} htmlFor={'username'}>Логин</label>
                <input className="form__input" type="text" value={username} onChange={onChangeUsername}/>
                <label className={'form__label'} htmlFor={'login'}>Пароль</label>
                <input className="form__input" type="password" value={password} onChange={onChangePassword}/>
                <input className="form__submit" type="submit" value={'Войти'}/>
            </form>
            <p className="auth__status">{user.status}</p>
        </div>
    );
}

export default Authorization;