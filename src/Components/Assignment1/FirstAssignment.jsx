// importing modules 
import { useState } from "react";
import "./FirstAssignment.css";

const FirstAssignment = () => {
  // count state 
  const [count, setCount] = useState(0);
  // color state 
  const [color, setColor] = useState(`rgb(252, 194, 0)`);

  // function to handle counter click 
  const handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  // function to handle color click 
  const handleColorClick = () => {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    setColor(randomColor);
  };

  return (
    <div className="mainContainer">
      <div className="outerContainer">
        <div className="button" onClick={handleClick} style={{ backgroundColor: color }}>
          <h1>{count}</h1>
          <h3>Click to increase counter</h3>
        </div>
      </div>

      <button onClick={handleColorClick}>Change Color</button>
    </div>
  );
};

export default FirstAssignment;