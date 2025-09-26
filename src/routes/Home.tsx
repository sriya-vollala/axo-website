import PresidentTitle from '../components/pres/PresidentTitle';
import PresidentInfo from '../components/pres/PresidentInfo'
import PresidentPic from '../components/pres/PresidentPic';
import PicCarousel from '../components/picCarousel';
import PresOutro from '../components/pres/PresidentOutro';


function Home() {
  return (
    <>
      <PicCarousel />
      <div className="pres-content">
          <PresidentTitle />
          <PresidentInfo />
      </div>
        <div className='pres-outro'>
          <PresidentPic />
          <PresOutro />
      </div>
    </>
  );
};


export default Home;