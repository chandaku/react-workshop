
import React, {Component} from "react";
import PropTypes from "prop-types";


export default class CartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty : props.item.qty
        }
    }
    
    componentDidMount() {
        
    }
    
    render() {
        console.log("Cart Item:",this.props.item);
        let item = this.props.item;
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input value={this.state.qty}
                           type = "number"
                           style = {{width:"100px"}}
                           //ref ={inputElement => this.inputElement = inputElement}
                    />>
                </td>
                <td>{item.price * item.qty}</td>
                <td><button>Update</button></td>
                <td><button>Remove</button></td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}