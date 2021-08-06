import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Привет из Мейна</h1>
      <button
        className={"btn btn-success"}
        onClick={() => show("это текст из мейн")}
      >
        Show alert
      </button>
    </>
  );
}
