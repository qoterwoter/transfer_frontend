import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL, headers} from "./userSlice";

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get(`${API_URL}/orders/`, headers)
    return response.data
})

export const orderDetail = createAsyncThunk('orders/orderDetail', async (id) => {
    const response = await axios.get(`${API_URL}/orders/${id}/`, headers)
    return response.data
})

export const makeOrder = createAsyncThunk('orders/makeOrder', async (data) => {
    const response = await axios.post(`${API_URL}/orders/`, data, headers)
    return response.data
})

export const setRate = createAsyncThunk('orders/setRate', async (data) => {
    const response = await axios.post(`${API_URL}/order-rating/${data.order}/`, data, headers)
    console.log(response)
    return response.data
})

const initialState = {
    orders: [],
    status: 'Нет данных'
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrders.pending]: state => {
            state.status = 'Загрузка данных'
        },
        [fetchOrders.fulfilled]: (state, action) => {
            const orders = action.payload
            state.orders = orders
            state.status = 'Успешно'
        },
        [fetchOrders.rejected]: (state, action) => {
            console.log(action)
            state.status = 'Ошибка'
        },
        [makeOrder.fulfilled]: (state, action) => {
            state.orders = [...state.orders, action.payload]
        },
        [orderDetail.fulfilled]: (state, action) => {
            state.currentOrder = action.payload
        }
    }
})

export default ordersSlice.reducer