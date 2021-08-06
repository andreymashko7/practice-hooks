import { useState, useEffect } from "react";

//Кастомные хуки !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const useLoger = (value) => {
  useEffect(() => {
    console.log("value changed : ", value);
  }, [value]);
};

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const clear = () => setValue("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

export default function App() {
  const input = useInput("");

  useLoger(input.value);

  // const changeNameHandler = (event) => setName(event.target.value);

  return (
    <div>
      <input type="text" {...input.bind} />
      <hr />
      <button onClick={() => input.clear()}>clear</button>
      <hr />
      <h1>{input.value}</h1>
    </div>
  );
}
