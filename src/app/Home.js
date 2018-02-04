import React from 'react';

 // events, click
// keyboard
// state, forceUpdate, setState
 
export default class Home extends React.Component {
    constructor() {
        super(); // must

        //keyword
        // initialize, mutable
        this.state = {
            // counter: 100,
            name: 'enter name',
            frameworks: ['React', 'Redux'],
            show: true
        }
    }

    // e => event
    increment(e) {
        console.log("Event ", e);
        this.props.onIncrement();
    }

      

    onNameChange(e) {
        //target is REAL dom element, input
        let target = e.target;

        console.log("Value is ", target.value);
    
        this.setState({
            name: target.value
        })
    }

    onAdd() {
        //BAD: Mutable
        //this.state.frameworks.push(this.state.name)

        //Good: Immutable
        this.setState({
            frameworks: [...this.state.frameworks, 
                        this.state.name]
        });

        this.setState({
            name: ''
        })


    }

    toggle() {
        console.log("Show before :", this.state.show)
        this.setState({
            show: !this.state.show
        })
        console.log("Show after :", this.state.show)
    }
    

    render() {

        
        console.log("Home render");
        //console.log("home Counter ", this.state.counter);


        return (
            <div>
                <h2>Home Page</h2>

                
                <p> Counter {this.props.counter} </p>

                <button onClick={(e) => this.increment(e)}>
                    +1
                </button>

                <br />

                <input value={this.state.name}
                       onChange={ (e) => this.onNameChange(e)} 
                />

                <button onClick={() => this.onAdd() } >
                    Add
                </button>


                <button onClick={() => this.toggle()}>
                    {this.state.show? "Hide": "Show"}
                </button>

            { this.state.show && 
                <ul>
                {
                    this.state
                    .frameworks.map ( name => (
                        <li key={name}> {name} </li>
                    ))
                }
                </ul>
            }

            </div>
        )
    }
}
 