import * as ActionTypes from '../ActionTypes'

let INITIAL_STATE={items:[]};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case ActionTypes.ADD_ITEM_TO_CART : {

            let items = [...state.items,action.payload.item];
            return Object.assign({},state,{items});

        }
        default : return INITIAL_STATE
    }
}