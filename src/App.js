import "./App.css";

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
      <Navigation />
      <Routes>
        {" "}
        <Route exact path="" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/live-performance" element={<LivePerformance />} />
        <Route path="/art-design" element={<ArtDesign />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
