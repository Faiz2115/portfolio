import AboutMe from "./components/Home/AboutMe";
import Home from "./components/Home/Home"
import Navbar from './components/Navbar';
import BackToUpButton from "./components/BackToUpButton"
const App = ()=> {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <BackToUpButton/>
    </>
  );
}

export default App;
