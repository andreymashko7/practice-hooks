import { useAlert } from "./AlertContext";

export default function Alert() {
  const alert = useAlert();
  console.log("🚀 ~ file: Alert.js ~ line 5 ~ Alert ~ alert", alert);

  if (!alert.visible) return null;
  return (
    <div className={"alert alert-danger"} onClick={alert.hide}>
      {alert.text}
    </div>
  );
}
