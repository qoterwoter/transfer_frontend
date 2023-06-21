import {combineReducers} from "redux";
import userSlice from "./reducers/userSlice";
import ordersSlice from "./reducers/ordersSlice";
import supportSlice from "./reducers/supportSlice";
import feedbacksSlice from "./reducers/feedbacksSlice";
import carSlice from "./reducers/carSlice";
import driverSlice from "./reducers/driverSlice";

const rootReducer = combineReducers({
    user: userSlice,
    orders: ordersSlice,
    support: supportSlice,
    feedbacks: feedbacksSlice,
    car: carSlice,
    driver: driverSlice
})

export default rootReducer