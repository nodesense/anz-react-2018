
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        //TODO: fetch products from service

       this.props.getProducts();

    }
    
    render() {
        let {loading, 
             products,
             addItemToCart
            } = this.props;


        if (loading) {
            return (
                <div>
                    <h2>Loading..</h2>
                </div>
            )
        }

        return (
            <div> 
            <h2>Product List</h2>

            <ul>
                {
                    products.map( product => (
                        <li key={product.id}>
                            <span>{product.name}</span>

                            <button onClick={() => addItemToCart(product)}>
                              +Cart
                            </button>
                        </li>
                    ))
                }
            </ul>

            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}