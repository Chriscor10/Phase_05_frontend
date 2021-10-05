import React from 'react';
import Signupcarrier from './SignUpCarrier';

const BASE_URL = "http://127.0.0.1:3000/carriers"

function CarrierContainer() {

 function addcarrier(carrier) {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(carrier)
    }
    fetch(BASE_URL, config)
    .then(r => r.json())
 }

    return (
        <div>
            <Signupcarrier addcarrier={addcarrier}/>
        </div>
    );
}

export default CarrierContainer;