import React from 'react';

function Vote() {

    const age = 12;

    return (
        <div className="container text-center mt-5">
            <h3>Voting Eligibility</h3>

            {age >= 18 ? (
                <p className="text-success mt-3">You are eligible to vote.</p>
            ) : (
                <p className="text-danger mt-3">You are not eligible to vote.</p>
            )}
        </div>
    );
}

export default Vote
