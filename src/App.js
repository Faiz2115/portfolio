import AboutMe from "./components/Home/AboutMe";
import Home from "./components/Home/Home"
import Navbar from './components/Navbar';
import BackToUpButton from "./components/BackToUpButton"
import Projects from "./components/Home/Projects";
import Skills from "./components/Home/Skills";
import Quotes from "./components/Home/Quotes";
import Footer from "./components/Footer";
const App = ()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Quotes/>
      <Footer/>
      <BackToUpButton/>
    </>
  );
}

export default App;
