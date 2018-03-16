import {createStore,
    combineReducers,
    applyMiddleware} from 'redux';
import cartReducer from './cart/state/reducers';
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    cart:cartReducer
})

let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
