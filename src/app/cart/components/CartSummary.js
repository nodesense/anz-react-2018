
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

// PureComponent => implements shouldComponentUpdate
export default class CartSummary extends  PureComponent {
    constructor(props) {
        super(props);
    }
    
    //TODO: componentWillReceiveProps
    //TODO: shouldComponentUpdate
    componentDidMount() {
        
    }

    // shouldComponentUpdate(nextProps, nextState) {

    // }
    
    render() {
        console.log("CartSummary Render");
        
        return (
            <div> 
            <h2>Cart Summary</h2>


            <p> Amount {this.props.amount} </p>
            <p> Count {this.props.count} </p>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}