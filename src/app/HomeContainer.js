import {connect} from 'react-redux';

import Home from './Home';

// container shall call this function
// when it called? subscribe
// return list of properties to component
// state => store.getState()
function mapStateToProps(state) {
    console.log("Home container mapStateToProps")
    return {
        counter: state.counter
        //items: state.items
    }
}

// container shall call this
// when it called? one time during component creation
// return list of props which contains functions
// dispatch == store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function() {
            dispatch({
                type: 'INCREMENT',
                payload: {
                    value: 1
                }
            })
        }
    }
}


let connectFn = connect(mapStateToProps ,
                        mapDispatchToProps);

// container is a component
// PureComponent, on state and props it calls render
let Container = connectFn(Home);

export default Container;