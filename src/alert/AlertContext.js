import { createContext, useReducer, useContext } from "react";

const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

const SHOW_ALERT = "show";
const HIDE_ALERT = "hide";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, visible: true, text: action.text };
    case HIDE_ALERT:
      return { ...state, visible: false };

    default:
      return state;
  }
};

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: "",
  });

  const show = (text) => dispatch({ type: SHOW_ALERT, text });
  const hide = () => dispatch({ type: HIDE_ALERT });
  //   const [alert, setAlert] = useState(false);

  //   const toggle = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider
      value={{
        show,
        hide,
        text: state.text,
        visible: state.visible,
        // toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
