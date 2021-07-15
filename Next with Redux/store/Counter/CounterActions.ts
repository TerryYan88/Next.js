import {CounterAction} from "./models/actions-types";
import {AppActions} from "../models/actions"
export const increment = (count: number):AppActions=>({
    type:CounterAction.INCREMENT_COUNT,
    count,
})
export const decrement = (count: number):AppActions=>({
    type:CounterAction.DECREMENT_COUNT,
    count,
})