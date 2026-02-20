'use client';

import React, { useState } from 'react';

function MyApp() {

  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to MyApp Page</h1>

      <h2 className="text-2xl mt-5">
        Count : {count}
      </h2>

      <button
        className="bg-blue-300 border-2 px-4 py-2 mt-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}

export default MyApp;