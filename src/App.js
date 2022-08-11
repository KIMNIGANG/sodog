import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main/main";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      user: undefined,
    };
  }
  const newState = { ...currentState };

  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      return {
        ...newState,
        user: action.payload,
      };
    // other cases ...
    default:
      return newState;
  }
}

const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
