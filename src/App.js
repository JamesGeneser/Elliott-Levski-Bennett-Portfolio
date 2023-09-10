import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navigation from "../src/components/Navigation";
import Home from "./pages/Home";
import Video from "./pages/Video";
import LivePerformance from "./pages/Live-Performance";
import ArtDesign from "./pages/Art-Design";
import AboutMe from "./pages/About-Me";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          {" "}
          <Route exact path="/" component={Home} />
          <Route exact path="/video" component={Video} />
          <Route exact path="/live-performance" component={LivePerformance} />
          <Route exact path="/art-design" component={ArtDesign} />
          <Route exact path="/about-me" component={AboutMe} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
