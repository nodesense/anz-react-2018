import * as ActionTypes from "./action-types";

//action creators are plain function, they create 
//plain objects

export const addItemToCart = (product) => {
    return {
        type: ActionTypes.ADD_ITEM_TO_CART,
        payload: {
            item: {
                id :  product.id,
                name: product.name,
                qty: product.qty || 1,
                price: product.price
            }
        }
    }
}


export const removeItemFromCart = (id) => {
       return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        payload: {
            id: id
        }
    }
}


export const updateItemInCart = (id, qty) => {
    return {
        type: ActionTypes.UPDATE_ITEM_IN_CART,
        payload: {
            id: id,
            qty: qty
        }
    }
}


export const  emptyCart = () => {
    return {
        type: ActionTypes.EMPTY_CART
    }
}
 
export const  initProducts = (products) => {
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}
 


// create actions and return actions
// //thunk, return a function as an action

import * as service from "./service";

export function getProducts() {
    //return functions as an action
    return function(dispatch, getState) {
        // called by thunk middleware
        console.log("get products now");
 
        dispatch({
            type: 'LOADING',
            payload: { loading: true}
        })

        service.fetchProducts()
        .then ( function (products) {
            let action = initProducts(products);
            dispatch(action);

            dispatch({
                type: 'LOADING',
                payload: { loading: false}
            })
        })
    }
}




// export function getProducts() {
//     console.log("getProducts begin");

//     service.getProduct(1000)
//     .then ( function(product) {
//         console.log("got the data");
//         return {
//             type: ActionTypes.INIT_PRODUCTS,
//             products: products
//         }
//     })

//     console.log("getProducts done");

//    //return undefined
    
// }


// export function addItemToCart(item) {
//     return {
//         type: ActionTypes.ADD_ITEM_TO_CART,
//         payload: {
//             item: item
//         }
//     }
// }
 
// export function removeItemFromCart(id) {
//     return {
//         type: ActionTypes.REMOVE_ITEM_FROM_CART,
//         payload: {
//             id: id
//         }
//     }
// }
 
// export function updateItemInCart(id, qty) {
//     return {
//         type: ActionTypes.UPDATE_ITEM_IN_CART,
//         payload: {
//             id: id,
//             qty: qty
//         }
//     }
// }
 


// export function emptyCart() {
//     return {
//         type: ActionTypes.EMPTY_CART
//     }
// }
 