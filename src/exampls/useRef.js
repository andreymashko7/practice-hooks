import "./App.css";
import { useEffect, useState, useRef } from "react";

function App() {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>колличество рендеров : {renderCount.current}</h1>
      <h1>колличество : {prevValue.current}</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
      <button className="btn btn-success" onClick={focus}>
        click
      </button>
    </div>
  );
}

export default App;
