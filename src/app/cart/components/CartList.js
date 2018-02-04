
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    //update life cycle

    componentWillReceiveProps(nextProps) {
        console.log("Cart List will receive");
        console.log("next List", nextProps.items.length);
        console.log("current props List", this.props.items.length);
     }

     shouldComponentUpdate(nextProps, nextState) {
        console.log("cartlist should update") 
        return nextProps.items != this.props.items;
     }
    
    render() {
        console.log("CartList render");
        return (
            <div> 
            <h2>CartList</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Price * Qty</th>
                        <th> Actions </th>
                    </tr>

                    {/* JSX Comment  */}

                    {
                        this.props.items.map( item => (
                            <CartItem item={item}
                                      key={item.id}
                                      onRemove={this.props.onRemove}
                                      
                                      
                            >

                            </CartItem>
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}