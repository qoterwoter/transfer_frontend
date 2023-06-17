import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const user = JSON.parse(localStorage.getItem('user')) || {}
export const API_URL = 'http://127.0.0.1:8000/api' // http://transferabkhazia.ru/ http://127.0.0.1:8000/
export const headers = {headers: {'Authorization': `Token ${user.token}`}}

export const authUser = createAsyncThunk('user/authUser', async ({username, password}, {rejectWithValue}) => {
    try {
        const response = await axios.post(
            API_URL + '/login/',{username, password}
        )
        return response
    } catch (e) {
        return rejectWithValue(e.response.data)
    }
})

export const registerUser = createAsyncThunk('user/registerUser', async ({firstName, lastName, username, password, email, phoneNumber, is_staff}) => {
    const response = await axios.post(`${API_URL}/register/`,{first_name: firstName, last_name: lastName, username, password, email, phoneNumber, is_staff})
    return response
})

export const updateUser = createAsyncThunk('user/updateUser', async (data) => {
    const response = await axios.put(`${API_URL}/users/${user.id}/`, data, headers)
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
            console.log(action)
            const data = {...action.payload.data, status: "Авторизован"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [authUser.rejected]: (state, action) => {
            const error = Object.values(action.payload)[0]
            state.status = 'Ошибка'
            toast.error('Ошибка: ' + error)
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'Ошибка'
            if (action?.error?.code === "ERR_BAD_REQUEST") {
                toast.error('Пользователь уже существует!')
            }
        },
        [registerUser.fulfilled]: (state, action) => {
            const data = {...action.payload.data, status: "Авторизован"};
            localStorage.setItem("user", JSON.stringify(data))
            return data
        },
        [updateUser.fulfilled]: (state, action) => {
            const data = {...user, ...action.payload}
            localStorage.setItem('user',  JSON.stringify(data))
            toast.success('Успешно!')
            return data
        }
    }
})

export const {unAuthorize} = userSlice.actions

export default userSlice.reducer