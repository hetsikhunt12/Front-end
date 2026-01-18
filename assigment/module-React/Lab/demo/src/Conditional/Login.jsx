import React, { useState } from 'react';

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    return (
        <div className="container text-center mt-5">
            <h3>User Authentication</h3>

            {isLoggedIn ? (
                <button className="btn btn-danger mt-3" onClick={handleLogout}>
                    Logout
                </button>
            ) : (
                <button className="btn btn-success mt-3"onClick={handleLogin}>
                    Login
                </button>
            )}

            <p className="mt-3">
                Status: {isLoggedIn ? "Logged In" : "Logged Out"}
            </p>

            <hr className="my-5" />
        </div>
    );
}

export default Login
