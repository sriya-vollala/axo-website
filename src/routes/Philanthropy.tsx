import PhilTitle from "../components/philanthropy/PhiloTitle";
import PhilInfo from "../components/philanthropy/PhiloInfo";
import PP1 from "../components/philanthropy/PhiloPic1";
import PP2 from "../components/philanthropy/PhiloPic2";

import PhilInfo2 from "../components/philanthropy/PhiloInfo2";

function Philo() {
    return (
        <div className="phil-content">
            <div className="phil-columnL">
                <PhilTitle />
                <div className="Phil-pic">
                    <PhilInfo />
                </div>
                <PP2 />
            </div>
            <div className="phil-columnR">
                <div className="Phil-pic">
                    <PP1 />
                </div>
                <PhilInfo2 />
            </div>
        </div> 
    )
}

export default Philo;