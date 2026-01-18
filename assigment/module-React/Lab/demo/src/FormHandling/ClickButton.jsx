import React, { useState } from 'react';

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div className="container text-center mt-5">
      <h3>{text}</h3>

      <button onClick={handleClick}>Click Me</button>
      <hr className="my-5" />
    </div>
  );
}

export default ClickButton
