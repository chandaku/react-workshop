// bootstraping

import React from "react";

import {render} from "react-dom";

import {App} from "./app/App";
import {Provider} from 'react-redux';
import store from './app/store'

//bind virtual dom to real dom

//render => diffing, patching real dom

render( <Provider store={store}>
        <App />
        </Provider>
, //virtual dom
        document.getElementById("root") //real dom
)