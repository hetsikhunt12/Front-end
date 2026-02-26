import React, { useRef, useState } from "react";
import Header from "../../coman/Header";

function Task4() {

  const inputRef = useRef(null);     
  const renderCount = useRef(0);      
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Header />

      <div className="container text-center mt-5">
        <h2>Task 4</h2>

        <h4 className="mt-3">State Count: {count}</h4>
        <button className="btn btn-success mt-2" onClick={() => setCount(count + 1)}>
          Update State (Re-render)
        </button>

        <div className="mt-4">
          <input type="text" ref={inputRef} className="form-control w-50 mx-auto" placeholder="Click button to focus me"/>
        </div>

        <button className="btn btn-primary mt-3" onClick={handleFocus}>
          Focus Input
        </button>
      </div>
    </div>
  );
}

export default Task4;