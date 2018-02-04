
import {connect} from "react-redux";
 
import ProductList from "../components/ProductList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         products: state.productState.products,
         loading: state.productState.loading,

         cartLength: state.cartItems.length,
         counter: state.counter
    }
}

function mapDispatchToProps(dispatch)  {
    return {
         addItemToCart: function(product) {
             // action creator
             let action = actions.addItemToCart(product);
             dispatch(action);
         }, 

         getProducts: function() {
             //TODO
             
         }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)