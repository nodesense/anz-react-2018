import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from './CartSummary';

import Button from "./Button";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [{ id: 1, name : 'Phone 1', 
                      price: 100, qty: 1}],
            
            amount: 0, //total amount
            count: 0, //number of items,
            flag: false
        }

        console.log("Cart Cons");
    }

    addItem() {
        let id = Math.ceil(Math.random() * 1000000);
        let item = {
            id: id,
            price: Math.ceil(Math.random() * 1000),
            name: "Product " + id,
            qty: 1,

            highlight: false
        }

        
        let newItems = [...this.state.items, item];
       
        this.setState({
            items: newItems
        })
        //TODO: set the state

    }

    removeItem(id) {
        //TODO

        let newItems = this.state
                    .items.filter (item => item.id != id);

        this.setState({
            items: newItems
        });
    }

    empty() {
        this.setState({
            items: []
        })
    }

    // dummy
    refresh() {
        this.setState({
            flag: this.state.flag
        })
    }
    
    componentDidMount() {
        console.log("Cart Did mount");
    }

    
    render() {

        console.log("Cart Render called");
        return (
            <div> 
            <h2>Cart</h2>

            <Button   onClick={() => this.addItem()}>
                Add Item
            </Button>


            <Button >
                Click Me
            </Button>
           


            <Button onClick={() => this.empty()}>
                Empty
            </Button>


            <Button onClick={() => this.refresh()}>
                Refresh
            </Button>

            <CartList items={this.state.items}
                      onRemove={(id) => this.removeItem(id)}

            />

            <CartSummary amount={this.state.amount}
                         count={this.state.count} />

            </div>
        )
    }
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}