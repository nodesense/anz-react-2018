import React from 'react';

//default import
import Header from './Header';
import Footer from './Footer';

// import Home from './Home';
import Home from "./HomeContainer";
  
import Cart from "./cart/components/Cart";
import About from './About';

import ProductList 
    from "./cart/containers/ProductListContainer";

import NotFound from './NotFound';

import {HashRouter as Router, 
        Switch,
        Route} from 'react-router-dom';

export class App extends React.Component {

    // create virtual dom, return 
    render() {
        //JSX JavaScript + XML
        return (
           <div>
                <h1>React App</h1>

                
                <Router>
                    <div>
                        <Header title="React App" />

                       <Switch>
                        <Route path="/" exact  component={Home}  >
                        
                        </Route>

                        <Route path="/products" component={ProductList} />
                        
                        <Route path="/cart" component={Cart} />
                        <Route path="/about" component={About} />
                        <Route path="*" component={NotFound} />
                   
                       </Switch>
                    </div>
                </Router>
                 

                <Footer year="2018" 
                      company="React App"
                      address= { {pincode: 560000} }
                      
                >
                    <p>Contact us: 9:5 PM</p>
                </Footer>

            </div>
        )
    }
}
    
