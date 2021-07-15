import {createStore,applyMiddleware,Store} from "redux";
import {rootReducers} from "./rootReducers";
import {useMemo} from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk,{ ThunkMiddleware } from "redux-thunk";
import {AppActions} from "./models/actions";
import { createLogger } from "redux-logger"; 
export type AppState = ReturnType<typeof rootReducers>;
const logger = createLogger();

let store:Store<AppState,AppActions> | undefined;

const initStore = (initialState:any)=>{
    return createStore<AppState,AppActions,{},{}>(rootReducers,initialState,composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>,logger)))
}

export const initialStore = (preloadedState:any)=>{
    let _store = store ?? initStore(preloadedState)

    if(preloadedState && store){
        _store=initStore({
            ...store.getState(),
            ...preloadedState
        })
    }
    store = undefined;
    if(typeof window === "undefined") return _store;
    if(!store) store = _store;
    return _store;
}
export const useStore = (initStore:any)=>{
    const store = useMemo(()=>initialStore(initStore),[initStore])
    return store;
}
