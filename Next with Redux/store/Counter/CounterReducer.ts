import {CounterAction,CountActionsTypes} from "./models/actions-types";

interface CountState{
    count: number;
}

const defaultState:CountState={
    count:0,
}

export const countReducer = (state=defaultState,action:CountActionsTypes):CountState=>{
    switch(action.type){
        case CounterAction.INCREMENT_COUNT:
            return{
                ...state,
                count:state.count+action.count,
            }
        case CounterAction.DECREMENT_COUNT:
            return{
                ...state,
                count:state.count-action.count,
            }
        default:
            return state;
    }
}