
import React, {Component} from "react";
import PropTypes from "prop-types";
import Address from "./Address";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
       
    }
    
    render() {
        return (
            <div> 
            <h2>Contact</h2>
            <Address addressOf="Head Office" street="Netherland" pincode="123123" cityname="Netherland" />
            <Address addressOf="Branch Office" street="Park-Centra" pincode="122001" cityname="Gurgaon" />
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}