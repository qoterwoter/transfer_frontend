import {combineReducers} from "redux";
import userSlice from "./reducers/userSlice";
import ordersSlice from "./reducers/ordersSlice";
import supportSlice from "./reducers/supportSlice";
import feedbacksSlice from "./reducers/feedbacksSlice";

const rootReducer = combineReducers({
    user: userSlice,
    orders: ordersSlice,
    support: supportSlice,
    feedbacks: feedbacksSlice,
})

export default rootReducer