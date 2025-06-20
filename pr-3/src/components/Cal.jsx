import { useState } from "react";
import "./Cal.css";

const Calculator = () => {
  const [input, setInput] = useState("");
const handleClick = (value) => {
  if (value === "=") {
    try {
      const result = eval(input.replace("x", "*").replace("÷", "/"));
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  } else if (value === "C") {
    setInput("");
  } else {
    setInput(input + value);
  }
};


  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "x",
    "1", "2", "3", "-",
    "0", "00", ".","+",
    "C","="
  ];

  return (
    <div className="calculator">

      <h1>calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={`btn ${btn === "=" ? "equal" : ""} ${btn === "C" ? "clear" : ""}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;