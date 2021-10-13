import React from 'react';
import CreateLoad from './CreateLoad';

const BASE_URL = "http://127.0.0.1:3000/loads"

function CreateLoadContainer() {

    function addLoad(load) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(load)
        }
        fetch(BASE_URL, config)
        .then(r => r.json())
    }

    return  (
        <div>
            <CreateLoad addLoad={addLoad}/>
        </div>
    )
}

export default CreateLoadContainer;