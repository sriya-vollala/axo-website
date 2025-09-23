//import PresTitle from '../components/pres/PresidentTitle';
//import PresInfo from '../components/pres/PresidentInfo';
//import PresPic from '../components/pres/PresidentPic';
import { IoArrowBackOutline } from 'react-icons/io5';
import AboutTitle from '../components/about/AboutTitle';
import AboutInfo from '../components/about/AboutInfo';
import AboutPic2 from '../components/about/AboutPic';
import AboutCarousel from '../components/about/AboutCarousel';

function AboutUs() {
  return (
    <>
      <div className="aboutTitle">
        <AboutTitle />
      </div>
      <div className="about-content">
        <div className="about-paragraph">
          <AboutInfo />
        </div>
        <div className="about-pic">
          <AboutPic2 />
        </div>
      </div>
      <hr />

      {/* icon carousel */}
      <AboutCarousel />
      <hr />

    </>
  );
};


export default AboutUs;