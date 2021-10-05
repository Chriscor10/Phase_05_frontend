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

    return (
        <div>
            {loads.map(loads => {
            return <Load 
            key={loads.id}
            loads={loads}
            />
        })}
        
        </div>
    )
}

export default LoadContainer;