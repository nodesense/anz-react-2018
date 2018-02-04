
import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlight: false
        }
    }
    

    mouseEnter() {
        this.setState({
            highlight: true
        })
    }

    mouseLeave() {
        this.setState({
            highlight: false
        })
    }

    componentDidMount() {
        
    }
    
    render() {
        console.log("Button render");

        return (
            <button onMouseEnter={() => this.mouseEnter()}
                    onMouseLeave={() => this.mouseLeave()}

                    {...this.props}
                    className={this.state.highlight?'success': ''}
            >
               {this.props.children}
            </button>
        )
    }
} 


Button.defaultProps = {
    
}

Button.propTypes = {
    
}