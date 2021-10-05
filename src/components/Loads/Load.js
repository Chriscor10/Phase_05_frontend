import React from 'react';
import './Load.css'


function Load({loads}) {
    const { id, container_size, load_weight, origin, destination, price} = loads


    return (
        <div className="load">
           <p>Origin: {origin}</p> 
           <p>Destination: {destination}</p>
           <p>Container Size: {container_size}</p>
           <p>Weight: {load_weight}</p>
           <h3>Price: ${price}</h3>
           <h3>Carrier: {loads.shipper.company_name}</h3>
           <h3>Contact: {loads.shipper.email}</h3>
        </div>
    )
}

export default Load;