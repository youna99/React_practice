import "./App.css";
import Message from "./Message";
import NameInput from "./NameInput";
import Select from "./Select";

function App() {
  return (
    <div className="App">
      <NameInput />
      <hr />

      <Message />
      <hr />

      <Select />
    </div>
  );
}

export default App;
