import React from "react";
import Cart from './cart/containers/Cart'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import cartReducer from "./cart/state/reducers/cartReducers"
 
export class App extends React.Component {

    render() {
        let reducer = (state=0,action)=>{
            switch(action.type){
                case "INCREMENT" :return action.payload.value+1;
                default:state
            }
        }
        let store = createStore(cartReducer);
        return (<Provider store={store}>
                    <div>
            <Cart/>
            </div>
        </Provider>

            )
        
    }
}