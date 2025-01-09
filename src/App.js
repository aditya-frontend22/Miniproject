import logo from './logo.svg';
import './App.css';
import Navbaaaaar from './components/Navbaaaaar';
import Homepage from './components/Pages/Homepage';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Coursepage from './components/Pages/Coursepage';
import Blogpage from './components/Pages/Blogpage';
import Contactpage from './components/Pages/Contactpage';
import Aboutpage from './components/Pages/Aboutpage';
import Signpage from './components/Pages/Signpage';
import Errorpage from './components/Pages/Errorpage';
import Secondyear from './components/Pages/Secondyear';

function App() {
  return (
    <div>
       <Navbaaaaar />
    <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/about" element={<Aboutpage />}></Route>
      <Route path="/blogs" element={<Blogpage />} ></Route>
      <Route path="/contact" element={<Contactpage />} ></Route>
      <Route path="/courses" element={<Coursepage />} ></Route>
      <Route path="/sign" element={<Signpage />} ></Route>
      <Route path="/error" element={<Errorpage />} ></Route>
      <Route path="/secondyear" element={<Secondyear />} ></Route>
  </Routes>
  <Footer />
    </div>
  );
}

export default App;
