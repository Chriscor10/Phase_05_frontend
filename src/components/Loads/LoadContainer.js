import React, { useState, useEffect } from 'react';
import Load from './Load';



const BASE_URL = "http://127.0.0.1:3000/loads"

function LoadContainer() {
    const [loads, setLoads] = useState([])


    useEffect (() => {
    
    fetch(BASE_URL)
    .then(r => r.json())
    .then(LoadsData => setLoads(LoadsData))
    }, [])

    function deleteLoad(loadsId) {
        const URL = `${BASE_URL}/${loadsId}`
        const config = {method: "DELETE"};
        fetch(URL, config)
        .then(r => r.json())
        .then(() => {
            const newLoads = loads.filter(loads => loads.id !== loadsId);
            setLoads(newLoads);
        })
    }

    

    return (
        <div>
            {loads.map(loads => {
            return <Load 
            key={loads.id}
            loads={loads}
            deleteLoad={deleteLoad}
            />
        })}
        </div>
    )
}

export default LoadContainer;