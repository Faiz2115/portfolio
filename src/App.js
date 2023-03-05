import AboutMe from "./components/Home/AboutMe";
import Home from "./components/Home/Home"
import Navbar from './components/Navbar';
import BackToUpButton from "./components/BackToUpButton"
import Projects from "./components/Home/Projects";
const App = ()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <BackToUpButton/>
    </>
  );
}

export default App;
