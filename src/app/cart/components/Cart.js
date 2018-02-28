
import React, {Component} from "react";
import PropTypes from "prop-types";
import CartSummary from "./CartSummary"
import CartList from "./CartList"
import * as actions from '../state/actions'

export default class Cart extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        if(this.inputElement){
            this.inputElement.focus();
        }
    }

    addItem(){
        let id = Math.ceil(Math.random(),1000000);
        let item = {
            id:id,
            name: 'Product'+id,
            price:100 + Math.ceil(Math.random(),1000),
            qty :1
        }
        console.log(this.props)
        this.props.actions.addItemToCart(item);
    }
    
    render() {
        return (
            <div> 
            <h2>Cart</h2>
            <button onClick={()=>this.addItem()}>Add Item</button>
            <CartList items = {this.props.items}/> 
            <CartSummary ammount ={this.props.ammount} count = {this.props.count}/>
            </div>
        )
    }
} 


Cart.defaultProps = {
    items :[],
    ammount: 1500,
    count : 5000
}

Cart.propTypes = {
    
}