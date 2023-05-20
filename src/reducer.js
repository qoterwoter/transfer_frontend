import {combineReducers} from "redux";
import userSlice from "./reducers/userSlice";
import ordersSlice from "./reducers/ordersSlice";
import supportSlice from "./reducers/supportSlice";

const rootReducer = combineReducers({
    user: userSlice,
    orders: ordersSlice,
    support: supportSlice
})

export default rootReducer