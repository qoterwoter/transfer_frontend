import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const user = JSON.parse(localStorage.getItem('user')) || {}
export const API_URL = 'http://test.std-962.ist.mospolytech.ru/api'

export const authUser = createAsyncThunk('user/authUser', async ({username, password}) => {
    const response = await axios.post(`${API_URL}/login/`, {username, password})
    console.log(response)
    return response.data
})

export const registerUser = createAsyncThunk('user/registerUser', async ({firstName, lastName, username, password, email}) => {
    try {
        const response = await axios.post(
            API_URL + '/register/',{first_name: firstName, last_name: lastName, username, password, email, is_artist: 'True'}
        )
        return response.data
    } catch (e) {
        return Promise.reject(e)
    }
})

const initialState = {
    'status': 'Не авторизован',
    ...user
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        unAuthorize: state => {
            localStorage.removeItem('user')
            return { status: 'Не авторизован' }
        }
    },
    extraReducers: {
        [authUser.fulfilled]: (state, action) => {
            const data = {...action.payload, status: "Успешно"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [authUser.rejected]: (state, action) => {
            console.log(action)
            state.status = 'Ошибка'
            state.errorCode = action.error.message
        },
    }
})

export const {unAuthorize} = userSlice.actions

export default userSlice.reducer