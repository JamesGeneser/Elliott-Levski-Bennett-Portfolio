import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../src/components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
