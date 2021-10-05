import React from 'react';
import Signupshipper from './Signupshipper';

const BASE_URL = "http://127.0.0.1:3000/shippers"

function Shippercontainer() {

    function addshipper(shipper) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(shipper)
        }
        fetch(BASE_URL, config)
        .then(r => r.json())
     }


    return(
        <div>
            <Signupshipper addshipper={addshipper}/>
        </div>
    )
}

export default Shippercontainer;