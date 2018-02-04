import {createStore, combineReducers} from 'redux';

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
    counter: counterReducer
    //cartItems: cartReducer
});

let store = createStore(rootReducer, {
    counter: 1000
} );

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