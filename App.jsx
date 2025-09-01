import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  
  const handleClick = (value) => {
    setInput(input + value);
  };

  
  const calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput("Error");
    }
  };

  
  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","C","=","+"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") clear();
              else if (btn === "=") calculate();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;