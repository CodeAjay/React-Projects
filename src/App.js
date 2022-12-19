import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [initial, final] = useState(0);

  function reset() {
    final(0);
  }
  function decrease() {
    final(initial - 1);
  }
  function increase() {
    final(initial + 1);
  }

  return (
    <div className="App">
      <h1>Number Counter</h1>
      <h2 className="counter">{initial}</h2>
      <button className="decrease btn-danger" onClick={decrease}>
        Decrease
      </button>
      <button className="reset btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="increase btn-success" onClick={increase}>
        Increase
      </button>
    </div>
  );
}
