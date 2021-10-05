import React, {useState} from 'react';
import '../Form/Form.css'

function Signupcarrier({addcarrier}) {
    const [formState, setFormState] = useState({
        carrier_name: "",
        email: "",
        password_digest: "",
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
            addcarrier(formState)
            }
    return (
        <div>
            <h1 className="form-heading">Signup and start moving loads around the country</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Carrier Name:
                    <input 
                    name="carrier_name" 
                    type="text" 
                    value={formState.carrier_name} 
                    onChange={handleNewCarrier}
                    placeholder="Carrier name"
                    />
                </label>
                <label>
                    Email:
                    <input 
                    name="email" 
                    type="text" 
                    value={formState.email} 
                    onChange={handleNewCarrier}
                    placeholder="Email"
                    />
                </label>
                <label>
                    Password:
                    <input 
                    name="password_digest" 
                    type="text" 
                    value={formState.password_digest} 
                    onChange={handleNewCarrier}
                    placeholder="Password"
                    />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signupcarrier;