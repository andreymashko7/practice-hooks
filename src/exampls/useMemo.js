import "./App.css";
import { useEffect, useState, useMemo } from "react";



function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? "red" : "black",
  };

  import "./App.css";
import { useEffect, useState, useMemo } from "react";

function complexCompute(number) {
  console.log("computed");
  let i = 0;
  while (i < 100000000) i++;
  return number * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "red" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  return (
    <>
      <h1 style={styles}>вычисляемое свойство: {computed}</h1>
      <button
        style={{ marinRight: "50px" }}
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Plus
      </button>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Minus
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change color
      </button>
    </>
  );
}

export default App;




  return (
    <>
      <h1 style={styles}>вычисляемое свойство: {...}</h1>
      <button
        style={{ marinRight: "50px" }}
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Plus
      </button>
      <button
        className="btn btn-success"
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Minus
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change color
      </button>
    </>
  );
}

export default App;
