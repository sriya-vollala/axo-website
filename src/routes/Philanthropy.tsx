import PhilTitle from "../components/philanthropy/PhiloTitle";
import PhilInfo from "../components/philanthropy/PhiloInfo";
import PP1 from "../components/philanthropy/PhiloPic1";
import PP2 from "../components/philanthropy/PhiloPic2";

import PhilInfo2 from "../components/philanthropy/PhiloInfo2";

function Philo() {
    return (
        <div className="phil-content">
            <div className="c1">
                <PhilTitle />
                <PhilInfo />
                <PP2 />
            </div>
            <div className="c2">
                <PP1 />
                <PhilInfo2 />
            </div>
        </div> 
    )
}

export default Philo;