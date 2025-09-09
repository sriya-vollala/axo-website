import AboutTitle from '../components/about/AboutTitle';
import AboutInfo from '../components/about/AboutInfo'
import AboutPic2 from '../components/about/AboutPic';
import PicCarousel from '../components/picCarousel';



function Home() {
  return (
    <>
      <PicCarousel />
      <div className="about-content">
        <div className="about2">
          <AboutTitle />
          <div className="text">
            <AboutInfo />
          </div>
        </div>
        <AboutPic2/>
      </div>
    </>
  );
};


export default Home;