import "./App.css";
import { useState } from "react";

function calculated() {
  console.log("some calc ...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counterState, setCounterState] = useState(() => calculated());
  const [state, setState] = useState({
    title: "Время спать ...",
    time: Date.now(),
  });

  function increment() {
    setCounterState((prev) => prev + 1);
  }

  function decrement() {
    setCounterState(counterState - 1);
  }

  function changeTitle() {
    setState((prev) => {
      return { ...prev, title: "Bitch" };
    });
  }

  return (
    <div>
      <h1>Counter: {counterState}</h1>
      <button className="btn btn-success" onClick={increment}>
        увеличить
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        убрать
      </button>
      <button className="btn btn-warning" onClick={changeTitle}>
        Получить заголовок
      </button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
