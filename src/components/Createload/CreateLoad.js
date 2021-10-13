import React, { useState } from 'react';

function CreateLoad({addLoad}) {
    const [formState, setFormState] = useState({
        container_size: "",
        load_weight: "",
        origin: "",
        destination: "",
        price: "",
        pickup_time: "",
        dropoff_time: "",
        pickup_date: "",
        dropoff_date: "",
        shipper_id: "",
    })

    function handleNewCarrier (event) {
        const userInput = event.target.value;
        const fieldName = event.target.name;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        addLoad(formState)
        }

    return (
        <div>
        <h1 className="form-heading">What do you want to ship?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Container size:
                    <input 
                    name="container_size" 
                    type="text" 
                    value={formState.container_size} 
                    onChange={handleNewCarrier}
                    placeholder="Container size"
                    />
                </label>
                <label>
                    Load Weight:
                    <input 
                    name="load_weight" 
                    type="text" 
                    value={formState.load_weight} 
                    onChange={handleNewCarrier}
                    placeholder="Load Weight"
                    />
                </label>
                <label>
                    Origin:
                    <input 
                    name="origin" 
                    type="text" 
                    value={formState.origin} 
                    onChange={handleNewCarrier}
                    placeholder="Origin"
                    />
                </label>
                <label>
                Destination:
                    <input 
                    name="destination" 
                    type="text" 
                    value={formState.destination} 
                    onChange={handleNewCarrier}
                    placeholder="Destination"
                    />
                </label>
                <label>
                    Price:
                    <input 
                    name="price" 
                    type="text" 
                    value={formState.price} 
                    onChange={handleNewCarrier}
                    placeholder="Price"
                    />
                </label>
                <label>
                    Pickup Time:
                    <input 
                    name="pickup_time" 
                    type="text" 
                    value={formState.pickup_time} 
                    onChange={handleNewCarrier}
                    placeholder="Pickup Time"
                    />
                </label>
                <label>
                    Dropoff Time:
                    <input 
                    name="dropoff_time" 
                    type="text" 
                    value={formState.dropoff_time} 
                    onChange={handleNewCarrier}
                    placeholder="Dropoff Time"
                    />
                </label>
                <label>
                    Pickup Date:
                    <input 
                    name="pickup_date" 
                    type="text" 
                    value={formState.pickup_date} 
                    onChange={handleNewCarrier}
                    placeholder="Pickup Date"
                    />
                </label>
                <label>
                    Dropoff Date:
                    <input 
                    name="dropoff_date" 
                    type="text" 
                    value={formState.dropoff_date} 
                    onChange={handleNewCarrier}
                    placeholder="Dropoff Date"
                    />
                </label>
                <label>
                    Shipper Id:
                    <input 
                    name="shipper_id" 
                    type="text" 
                    value={formState.shipper_id} 
                    onChange={handleNewCarrier}
                    placeholder="Shipper Id"
                    />
                </label>
                <button type="submit">Post Load</button>
            </form>
        </div>
    )
}

export default CreateLoad;