import React, {useState} from 'react';
import {useDispatch} from "react-redux";

function Registration(props) {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onChangeUsername = e => setUsername(e.target.value)
    const onChangePassword = e => setPassword(e.target.value)
    const onChangePassword2 = e => setPassword2(e.target.value)
    const onChangeEmail = e => setEmail(e.target.value)
    const onChangeFirstName = e => setFirstName(e.target.value)
    const onChangeLastName = e => setLastName(e.target.value)

    const dispatch = useDispatch()

    const register = (e) => {
        e.preventDefault()

        if (firstName.length < 2) {
            showError('Введите корректное имя')
            return
        }

        if (lastName.length < 4) {
            showError('Введите корректную фамилию')
            return
        }

        if (username.length < 5) {
            showError('Введите корректный логин')
            return
        }

        if (password.length < 5 || password2.length < 5) {
            showError('Введите корректный пароль')
            return
        }

        if (password !== password2) {
            showError('Пароли не совпадают')
            return
        }
        if (email.length < 10) {
            showError('Введите корректный email')
            return
        }
        console.log(username, password)
        dispatch(registerUser({firstName, lastName, username, password, email}))
    }

    return (
        <div className={'register'}>

        </div>
    );
}

export default Registration;