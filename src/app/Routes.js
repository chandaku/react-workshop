import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
        } from 'react-router-dom';
import Contact from './components/common/Contact';
import App from './App';
import Cart from './cart/containers/Cart';
import StateList from './StatesViewer/Container/StateList'

export default class Routes extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    // componentDidCatch(err, errInfo){
    //     console.log("errr>>>>>>>>>>>",err, errInfo)
    // }
    render() {
        return (
            <div> 
                <Router>
                    <App>
                        <Switch>
                            <Route path="/" exact component={Contact} />
                            <Route path="/cart" exact component={Cart} />
                            <Route path="/states" exact component={StateList} />
                        </Switch>
                    </App>
                </Router>
            </div>
        )
    }
} 


Routes.defaultProps = {
    
}

Routes.propTypes = {
    
}
