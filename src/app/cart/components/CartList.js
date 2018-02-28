
import React, {Component} from "react";
import PropTypes from "prop-types";
import CartItem from './CartItem'

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        // Destructure of elements

        let {items} = this.props
        console.log("Items in CartList:",items);
        return (
            <div> 
            <h2>CartList</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </tbody>
            </table>
            
            {
                items.map( item => {
                    console.log("Item in CartList:",item);
                    return <CartItem key={item.id}
                    item = {item}
                    ></CartItem>
                })
            }
            </div>
        )
    }
} 


CartList.defaultProps = {
   items: [] 
}

CartList.propTypes = {
    items:PropTypes.array
}