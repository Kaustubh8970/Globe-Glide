import { combineReducers } from "redux";
import Data from "./reducerFunction";

const rootReducer = combineReducers({
    bookHotel: Data
});

export default rootReducer;
