import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";
export const user = JSON.parse(localStorage.getItem('user')) || {}
export const API_URL = 'http://transferabkhazia.ru/api'
export const headers = {headers: {'Authorization': `Token ${user.token}`}}

export const authUser = createAsyncThunk('user/authUser', async ({username, password}) => {
    const response = await axios.post(`${API_URL}/login/`, {username, password})
    toast.success('Успешно!')
    return response.data
})

export const registerUser = createAsyncThunk('user/registerUser', async ({firstName, lastName, username, password, email}) => {
    const response = await axios.post(
        API_URL + '/register/',{first_name: firstName, last_name: lastName, username, password, email, is_artist: 'True'}
    )
    return response.data
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
            const data = {...action.payload, status: "Авторизован"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [authUser.rejected]: (state, action) => {
            state.status = 'Ошибка'
            state.errorCode = action.error.message
        },
        [registerUser.rejected]: (state, action) => {
            console.log(action)
        },
        [registerUser.fulfilled]: (state, action) => {
            const data = {...action.payload, status: "Авторизован"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        }
    }
})

export const {unAuthorize} = userSlice.actions

export default userSlice.reducer