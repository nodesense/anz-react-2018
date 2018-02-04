import React from 'react';

import PropTypes from "prop-types";

// extract text plug-ins
import "./Footer.css";

// props passed as params
export default function Footer(props) {
    //let year = 2017;
    //let company = 'React App';
 
    // NOT Possible
    // props.year = 3000;

    // deconstruct
    let {year, company} = props;

 
    return (
    <div className="highlight">
        <hr />
        <p>Copyrights@ {year}, {company} </p>
   
        <p>pincode {props.address.pincode}</p>
        
        {props.children}

    </div>
    )
}

//keyword
Footer.propTypes = {
    year: PropTypes.number.isRequired, // mandatory
    company: PropTypes.string
}