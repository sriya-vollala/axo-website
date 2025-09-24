import PresidentTitle from '../components/pres/PresidentTitle';
import PresidentInfo from '../components/pres/PresidentInfo'
import PresidentPic from '../components/pres/PresidentPic';
import PicCarousel from '../components/picCarousel';



function Home() {
  return (
    <>
      <PicCarousel />
      <div className="pres-content">
        <div className='pres-left'>
          <PresidentTitle />
          <PresidentPic />
        </div>
        <div>
          <PresidentInfo />
        </div>
      </div>
    </>
  );
};


export default Home;