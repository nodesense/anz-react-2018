import {createStore, combineReducers,
        applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import cartReducer 
        from './cart/state/reducers/cart-reducer';

import productReducer 
    from './cart/state/reducers/product-reducer';



// called by store
function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log("middleware", typeof action, action);

            let result = next(action);

            // done with reducers
            if (action.type == 'INCREMENT' || 
                action.type == 'DECREMENT') {
                    let state = store.getState();
                    localStorage.setItem("counter", state.counter)
                }
             
            return result;

        }
    }
}

//counterReducer.js
const INITIAL_STATE = 0;
function counterReducer(state = INITIAL_STATE,
                        action) {

    console.log("counterReducer ", state, action);
                
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload.value;
    
        case 'DECREMENT': {
            return state - action.payload.value;
        }

        default:
            return state;
    }

}
// reducer.js ends

let rootReducer = combineReducers({
    counter: counterReducer,
    cartItems: cartReducer,
    productState: productReducer
    //cartItems: cartReducer
});

let counter = parseInt(localStorage.counter) || 0

let store = createStore(rootReducer, {
                                counter: counter
                            },
                        
                        applyMiddleware(loggerMiddleware, thunk)
                        
                        );

export default store;

//learning start

let state = store.getState();
console.log("STATE ", state);


store.subscribe(function() {
    console.log("SUBS 1");
})

// component did mount
let unsubFn = store.subscribe(function() {
    console.log("SUBS 2");
})

//componentWillUnmount
unsubFn(); //unsubscribe



//actions.js (Action creators) begin
    function incrementAction(value) {
        // returns an action
        return {
            type: 'INCREMENT',
            payload: {
                value: value
            }
        }
    }
//actions.js end


console.log("DISPATCH add 10");

// store.dispatch({
//     type: 'INCREMENT',
//     payload: {
//         value: 10
//     }
// })


store.dispatch(incrementAction(10));

console.log("STATE ", store.getState());



console.log("DISPATCH sub 2");

store.dispatch({
    type: 'DECREMENT',
    payload: {
        value: 2
    }
})

console.log("STATE ", store.getState());