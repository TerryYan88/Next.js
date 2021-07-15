import { combineReducers } from "redux";
import {countReducer} from "./Counter/CounterReducer";
export const rootReducers = combineReducers({
    countReducer
});