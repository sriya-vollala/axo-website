import { Routes, Route, Link } from 'react-router-dom';

import TitleName from './components/TitleName';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './routes/aboutUs';
import Home from './routes/Home';
import Philo from './routes/Philanthropy';
import Executive from './routes/ExecBoard'; 
import ContactUs from './routes/Contact';

import './App.css';

function App() {
  return (
    <>
      <div className="body">
      
      <TitleName />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/philanthropy" element={<Philo />}></Route>
        <Route path="/exec-board" element={<Executive />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      </div>
      
    </>
  );
}


export default App;