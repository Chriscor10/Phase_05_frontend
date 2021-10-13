import React, { useState } from 'react';

function AssingLoad({addcarrierload}) {
    const [formState, setFormState] = useState({
        carrier_id: "",
        load_id: "",
    })

    function handleNewCarrierload (event) {
        const userInput = event.target.value;
        const fieldName = event.target.name;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        addcarrierload(formState)
        }
    return (
       <div>
        <h1 className="form-heading">Assign your load to a carrier.</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Load:
                    <input 
                    name="load_id"
                    type="text" 
                    value={formState.load_id} 
                    onChange={handleNewCarrierload}
                    placeholder="Load"
                    />
                </label>
                <label>
                    Carrier:
                    <input 
                    name="carrier_id" 
                    type="text" 
                    value={formState.carrier_id} 
                    onChange={handleNewCarrierload}
                    placeholder="Carrier"
                    />
                </label>
                <button type="submit">Assign</button>
            </form>
        </div>
    )
}

export default AssingLoad;