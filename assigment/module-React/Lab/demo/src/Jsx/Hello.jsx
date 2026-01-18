import React from 'react';

function Hello() {

    const language = "JSX";
    const library = "React";

    return (
        <div>
            <div className="container">
                <h1 className="text-center text-success mt-5">
                    Welcome to JSX
                </h1>

                <p className="text-center">
                    {language} is mainly used in {library} to create dynamic and reusable UI components.
                    It makes writing UI code simple and readable.
                </p>
            </div>
        </div>
    );
}

export default Hello
