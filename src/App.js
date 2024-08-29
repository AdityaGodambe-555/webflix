import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App flex items-center flex-col relative overflow-x-hidden bg-black">
        <Body></Body>
      </div>
    </Provider>
  );
}

export default App;
