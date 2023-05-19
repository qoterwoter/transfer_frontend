import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const user = JSON.parse(localStorage.getItem('user')) || {}

export const authUser = createAsyncThunk('user/authUser', async ({username, password}) => {

})

const initialState = {
    'status': 'Не авторизован',
    ...user
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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

export default userSlice.reducer