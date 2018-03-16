
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Address extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h4>{this.props.addressOf}</h4>
            <h5>Street : {this.props.street}</h5>
            <h5>Pincode : {this.props.pincode}</h5>
            <h5>City : {this.props.cityname}</h5>
            </div>
        )
    }
} 


Address.defaultProps = {
    
}

Address.propTypes = {
    
}