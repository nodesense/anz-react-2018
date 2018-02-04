import React from 'react';


// events, click
// keyboard
// state, forceUpdate, setState

import store from './store';

class Container extends React.Component {
      

    componentDidMount() {
        this.ubscribeFn = store.subscribe( () => {
            console.log("Container SUBS , ", Math.random());
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.ubscribeFn();
    }
  
    

    render() {

        //FIXME: 

        let state = store.getState();
 
        let Component = this.props.component;

        console.log("Comp", Component);
        
        return (
          <Component counter={state.counter}
                     onIncrement={ ()=> {
                        store.dispatch({
                            type: 'INCREMENT',
                            payload: {
                                value: 1
                            }
                        })
                     }}
          />
        )
    }
}

//function compononent
export default function ContainerComp(props)  {
    return (
        <Container component={props.component} />
    )
}