import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Projects } from "./components/Projects";
// import { Footer } from "./components/Footer";

import { Banner, About, Projects, Skills, Footer } from './container'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
