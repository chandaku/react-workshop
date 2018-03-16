
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
            <Address addressOf="Head Office" street="Netherland" pincode="123123" cityname="Netherland" phone="+31-32453454"/>
            <Address addressOf="Branch Office" street="Park-Centra" pincode="122001" cityname="Gurgaon" phone="+91-923932332"/>
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}