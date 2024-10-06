import "../src/App.css";
import { Contactme } from "./components/Contactme";
import { Home } from "./components/Home";
// import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/mdsaleck" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </div>
  );
}

export default App;
