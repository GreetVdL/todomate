import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header>TO DO MATE</header>
      <Form></Form>
      <List />
    </div>
  );
}

export default App;
