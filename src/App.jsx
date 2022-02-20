import "./App.scss";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect, useRef } from "react";

function App() {
  const headerRef = useRef();

  useEffect(() => {
    headerRef.current.style.animation =
      "slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    return () => {
      headerRef.current.style.animation = "none";
    };
  }, []);

  return (
    <div className="App">
      <header ref={headerRef}>TO DO MATE</header>
      <Form></Form>
      <List />
    </div>
  );
}

export default App;
