import React from 'react';

function UserCard(props) {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <div className="card-body text-center">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text">Age: {props.age}</p>
                <p className="card-text">Location: {props.location}</p>
            </div>
            <hr className="my-5" />
        </div>
        
    );
}

export default UserCard
