import PresTitle from '../components/pres/PresidentTitle';
import PresInfo from '../components/pres/PresidentInfo';
import PresPic from '../components/pres/PresidentPic';



function President() {
  return (
    <>
      <div className="pres-content">
        <div className="about2">
          <PresTitle />
          <div className="text">
            <PresInfo />
          </div>
        </div>
        <PresPic />
      </div>
    </>
  );
};


export default President;