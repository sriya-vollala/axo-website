import AboutTitle from '../components/about/AboutTitle';
import AboutInfo from '../components/about/AboutInfo'
import AboutPic2 from '../components/about/AboutPic';



function Home() {
  return (
    <>
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