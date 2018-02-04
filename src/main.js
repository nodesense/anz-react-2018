
// bootstrapping
// put react app into browser

import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app/App';

import {Provider} from 'react-redux';


import store from './app/store';

// real dom, virtual dom
// Merge virtual dom to real dom
// Patch
// Diff
ReactDOM
.render( <Provider store={store}>
                <App />
        </Provider>,


        document.getElementById('root') //real dom
)
