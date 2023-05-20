import {combineReducers} from "redux";
import userSlice from "./reducers/userSlice";
import ordersSlice from "./reducers/ordersSlice";

const rootReducer = combineReducers({
    user: userSlice,
    orders: ordersSlice,
})

export default rootReducer