import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL, headers, user} from "./userSlice";


export const getNotificationStatus = createAsyncThunk('driver/getNotificationStatus', async () => {
    const response = await axios.get(`${API_URL}/drivers/${user.driver_id}/`, headers)
    return response.data
})

export const updateNotificationStatus = createAsyncThunk('driver/updateNotificationStatus', async status => {
    const response = await axios.put(`${API_URL}/drivers/${user.driver_id}/`, {
        notifications: status
    }, headers)
    return response.data
})

const driverSlice = createSlice({
    name: 'driver',
    initialState: {

    },
    reducers: {},
    extraReducers: {
        [getNotificationStatus.fulfilled]: (state, action) => {
            state = {...action.payload}
            return action.payload
        },
    }
})

export default driverSlice.reducer