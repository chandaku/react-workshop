import React, {Component} from "react";
import PropTypes from "prop-types";
import State from './State'

export default class StateList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log("in componentDidMount going to get the states")
        this.props.actions.fetchStates();
    }
    
    render() {
        if (this.props.loading) {
            return (
                <h2>States loading ...</h2>
            );
        }

        if (this.props.error) {
            return (
                <h2> Error loading states {this.props.errorMessage} </h2>
            )
        }
        console.log("xxxxxxxxxxxxx" + this.props.states)
        return (
            <div> 
            <h2>StateList</h2>
            <table>
                <tbody>
                <tr>
                        <td>ID</td>
                        <td>Code</td>
                        <td>Name</td>
                </tr>
               
                {
                    this.props.states.map(state=>(
                        <State key={state.id} state={state}/>
                    ))
                }

                </tbody>
            </table>
            </div>
        )
    }
}


StateList.defaultProps = {
    states : [
        {
        "code": "DL",
        "id": 1,
        "name": "Delhi"
        },
        {
        "code": "WB",
        "id": 2,
        "name": "West Bengal"
        }
        ],
    loading :false,
    error :false,
    errorMessage :''
}

StateList.propTypes = {
    
}