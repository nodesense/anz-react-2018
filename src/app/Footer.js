import React from 'react';

// props passed as params
export default function Footer(props) {
    //let year = 2017;
    //let company = 'React App';
 
    // NOT Possible
    // props.year = 3000;

    // deconstruct
    let {year, company} = props;

 
    return (
    <div>
        <hr />
        <p>Copyrights@ {year}, {company} </p>
   
        <p>pincode {props.address.pincode}</p>
        
        {props.children}

    </div>
    )
}