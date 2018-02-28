import {combineReducers} from 'redux';
import cartReducer from './cartReducers'

let rootReducer = combineReducers({
    cartItems:cartReducer
})

export default rootReducer;