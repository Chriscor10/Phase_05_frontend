import React, { useState } from 'react';
import '../Form/Form.css'

function Signupshipper({addshipper}) {
    const [formState, setFormState] = useState({
        company_name: "",
        email: "",
        password_digest: "",
    })

    function handleNewShipper(event) {
        const userInput = event.target.value;
        const fieldName = event.target.name;
        setFormState({
            ...formState,
            [fieldName]: userInput
        })
    }

        function handleSubmit(event) {
            event.preventDefault();
            addshipper(formState)
            }

    return (
        <div>
            <h1 className="form-heading">Find logistic companies to move your products all around the country</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Shipper Name:
                    <input 
                    name="company_name" 
                    type="text" 
                    value={formState.company_name} 
                    onChange={handleNewShipper}
                    placeholder="Shipper name"
                    />
                </label>
                <label>
                    Email:
                    <input 
                    name="email" 
                    type="text" 
                    value={formState.email} 
                    onChange={handleNewShipper}
                    placeholder="Email"
                    />
                </label>
                <label>
                    Password:
                    <input 
                    name="password_digest" 
                    type="text" 
                    value={formState.password_digest} 
                    onChange={handleNewShipper}
                    placeholder="Password"
                    />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signupshipper;