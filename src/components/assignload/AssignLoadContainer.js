import React from 'react';
import AssignLoad from './AssignLoad';

const BASE_URL = "http://localhost:3000"

function AssignLoadContainer() {

    function addcarrierload(carrierload) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(carrierload)
        }
        fetch(BASE_URL + "/carrierloads", config)
        .then(r => r.json())
    }


    return (
        <div>
            <h1>Container Loaded</h1>
            <AssignLoad 
            addcarrierload ={addcarrierload}
            />
        </div>
    )
}

export default AssignLoadContainer;