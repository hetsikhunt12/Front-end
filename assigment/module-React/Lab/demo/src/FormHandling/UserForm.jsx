import React, { useState } from 'react';

function UserForm() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    return (
        <div className="container mt-5">
            <h3 className="text-center">User Form</h3>

            <form className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Name: </label>
                    <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={handleNameChange}/>
                </div><br></br>

                <div className="mb-3">
                    <label className="form-label">Age: </label>
                    <input type="number" className="form-control" placeholder="Enter your age" value={age} onChange={handleAgeChange}/>
                </div>
            </form>

            <div className="mt-3">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Age:</strong> {age}</p>
            </div>
        </div>
    );
}

export default UserForm
