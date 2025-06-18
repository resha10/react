import { useState } from "react"; 
import './Counter.css'; 

const Counter = () => { 
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
    console.log('Increment....');
  };

  const handleDecrement = () => {
    if (count <= 0) {
      alert("Count cannot go below 0!");
      return;
    }
    setCount(count => count - 1);
    console.log('Decrement.....');
  };

  const handleReset = () => {
    setCount(0);
    console.log('Reset ......');
  };

  return (
    <div className="container">
      <h1>Counter App: {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
