import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from './pages/home/Home';
import Portfolio from './pages/porfolio/Portfolio';
const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio/>} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
