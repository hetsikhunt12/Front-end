import React, { useState } from "react";
import Header from "../../coman/Header";

function Task1() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-light min-vh-100">
      <Header />

      <div className="container d-flex justify-content-center align-items-center py-5">
        <div className="card shadow-lg p-3 text-center"
          style={{ width: "350px", borderRadius: "10px" }}>
          <h2 className="mb-3 text-primary fw-bold">React Hooks</h2>
          <h5 className="text-muted mb-4">Task 1</h5>

          <div className="display-6 fw-bold my-2"
            style={{ background: "#f8f9faeb", borderRadius: "10px", padding: "10px", }}>{count}
          </div>

          <div className="d-flex justify-content-center gap-3 mt-3">
            <button className="btn btn-success px-3" onClick={() => setCount(count + 1)}>
              Increment
            </button>

            <button className="btn btn-dark px-3" onClick={() => setCount(count - 1)}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task1;