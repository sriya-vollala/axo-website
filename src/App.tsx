import { Routes, Route, Link } from 'react-router-dom';

import TitleName from './components/TitleName';
import NavBar from './components/NavBar';
import AboutTitle from './components/about/AboutTitle';
import AboutInfo from './components/about/AboutInfo'
import AboutPic from './components/about/AboutPic';
import Footer from './components/Footer';
import President from './routes/PresidentNote';
import Home from './routes/Home';
import Philo from './routes/Philanthropy';
import './App.css';

function App() {
  return (
    <>
      <TitleName />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/presidents-note" element={<President />} />
        <Route path="/philanthropy" element={<Philo />}></Route>
      </Routes>
      <Footer />
    </>
  );
}


export default App;