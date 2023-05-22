import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL, headers} from "./userSlice";
import toast from "react-hot-toast";

export const driver = JSON.parse(localStorage.getItem('driver')) || {}

export const fetchCar = createAsyncThunk('car/fetchCar', async () => {
    const response = await axios.get(`${API_URL}/car/`, headers)
    return response.data
})

export const updateCar = createAsyncThunk('car/updateCar', async data => {
    console.log(data)
    const response = await axios.put(`${API_URL}/car/${data.id}/`, data, headers)
    return response.data
})

export const driverInfo = createAsyncThunk('car/driverInfo', async () => {
    const response = await axios.get(`${API_URL}/drivers/`, headers)
    return response.data
})

const initialState = {
    status: "Нет данных",
    ...driver
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCar.fulfilled]: (state, action) => {
            const data = {status: 'Успешно', ...action.payload[0]}
            return data
        },
        [updateCar.fulfilled]: (state, action) => {
            toast.success('Данные обновлены')
            return {...action.payload}
        },
        [driverInfo.fulfilled]: (state, action) => {
            const data = {...action.payload.data};
            localStorage.setItem("driver", JSON.stringify(data))
            return data
        }
    }
})

export default carSlice.reducer