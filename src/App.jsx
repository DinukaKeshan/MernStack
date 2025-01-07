import React from "react";
import "./App.css";

function App() {
  const [number, setNumber] = React.useState(0);

  return (
    <div className="app">
      <h1>Calculator</h1>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(() => number + 1);
        }}
      >
        +1
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setNumber(() => number - 1);
        }}
      >
        -1
      </button>
    </div>
  );
}

export default App;
