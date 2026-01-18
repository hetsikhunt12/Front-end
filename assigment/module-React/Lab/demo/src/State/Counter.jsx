import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div className="container text-center mt-5">
            <h2>Counter App</h2>

            <h3 className="text-primary mt-3"> Count: {count}</h3>

            <button className="btn btn-success mt-3" onClick={() => setCount(count + 1)}> Increment</button>
        </div>
    );
}

export default Counter
