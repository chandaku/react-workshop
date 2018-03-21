
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class State extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        let {state} = this.props;
        return (
            <tr>
                <td>{state.id}</td>
                <td>{state.code}</td>
                <td>{state.name}</td>
                <td><button onClick={()=>{
                    this.props.actions.viewState(state.id)
                }}>
                View
                </button></td>
                
            </tr>
            
        )
    }
} 

const ViewState = ()=>{
console.log("View Working");
}

State.defaultProps = {
    
}

State.propTypes = {
    
}