import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Intro from "./components/Intro";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Connect from "./components/Connect";
import Projects from "./components/Projects";
function App() {
  return (
    <div>
      <div className="header"></div>
      <div className="main">
        <div className="container">
          <Intro />
          <TechStack />
          <Projects />
          <Connect />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
