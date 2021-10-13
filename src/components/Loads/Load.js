import React from 'react';
import './Load.css'



function Load({loads, deleteLoad}) {
  
    const { id, container_size, load_weight, origin, destination, price} = loads

    function handledeleteLoad() {
        deleteLoad(id)
    }

   
    return (
        <div className="load">
           <p>Origin: {origin}</p> 
           <p>Destination: {destination}</p>
           <p>Container Size: {container_size}</p>
           <p>Weight: {load_weight}</p>
           <h3>Price: ${price}</h3>
           <p>Carrier: {loads.shipper.company_name}</p>
           <h3>Contact: {loads.shipper.email}</h3>
           <button className="" onClick={handledeleteLoad} type="submit">Delete</button>
        </div>
    )
}

export default Load;