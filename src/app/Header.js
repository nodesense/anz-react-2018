import React from 'react';

import {NavLink} from 'react-router-dom';

export default class Header 
                extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>

                <NavLink to="/"
                        exact
                         className="button"
                         activeClassName="success"
                >
                    Home
                </NavLink>


                <NavLink to="/products"
                         className="button"
                         activeClassName="success"
                >
                    Products
                </NavLink>


                <NavLink to="/cart"
                         className="button"
                         activeClassName="success"
                >
                    Cart
                </NavLink>

                <NavLink to="/about"
                         className="button"
                         activeClassName="success"
                >
                    About
                </NavLink>


                <hr />
            </div> 
        )
    }

}