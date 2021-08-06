import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pre, setPre] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log("clean");
    };
  }, [type]);

  function mouseMoveHandler(event) {
    setPre({
      x: event.clientX,
      y: event.clientY,
    });
  }

  useEffect(() => {
    console.log("componentdidmount");
    window.addEventListener("mousemove", mouseMoveHandler);
  }, []);

  return (
    <div>
      <h1>Type : {type}</h1>
      <button onClick={() => setType("users")}>users</button>
      <button onClick={() => setType("todos")}>Todos</button>
      <button onClick={() => setType("posts")}>Posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pre, null, 2)}</pre>
    </div>
  );
}

export default App;
