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
        <Route
          exact
          path="Elliott-Levski-Bennett-Portfolio/"
          element={<Home />}
        />
        <Route
          path="Elliott-Levski-Bennett-Portfolio/video"
          element={<Video />}
        />
        <Route
          path="Elliott-Levski-Bennett-Portfolio/live-performance"
          element={<LivePerformance />}
        />
        <Route
          path="Elliott-Levski-Bennett-Portfolio/art-design"
          element={<ArtDesign />}
        />
        <Route
          path="Elliott-Levski-Bennett-Portfolio/about-me"
          element={<AboutMe />}
        />
      </Routes>
    </div>
  );
}

export default App;
