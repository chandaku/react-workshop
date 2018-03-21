import {createStore,
    combineReducers,
    applyMiddleware} from 'redux';
import cartReducer from './cart/state/reducers';
import thunk from "redux-thunk";
import StateReducer from "./StatesViewer/state/reducer"


let rootReducer = combineReducers({
   // cart:cartReducer,
    stateList: StateReducer
})

let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
