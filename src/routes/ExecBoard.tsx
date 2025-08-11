import ExecTitle from "../components/execboard/ExecTitle";
import AlexaG from "../components/execboard/Alexa";
import AvaL from "../components/execboard/Ava";
import AngelaO from "../components/execboard/Angela";
import EmmyH from "../components/execboard/Emmy";
import SriyaV from "../components/execboard/Sriya";
import KatieZ from "../components/execboard/Katie";
import NatalieK from "../components/execboard/Natalie";
import KateM from "../components/execboard/Kate";
import RachelD from "../components/execboard/Rachel";
import AdiyaM from "../components/execboard/Adiya";
import SamH from "../components/execboard/Sam";
import JessH from "../components/execboard/Jess";
import HannahM from "../components/execboard/Hannah";

function Executive() {
    return(
        <>
            <div className="centerinfo">
                <ExecTitle />
                <div className="container">
                    <AlexaG />
                    <AvaL />
                    <AngelaO />
                </div>
                <div className="container">
                    <EmmyH />
                    <SriyaV />
                    <KatieZ />
                </div>
                <div className="container">
                    <NatalieK />
                    <KateM />
                    <RachelD />
                </div>
                <div className="container">
                    <AdiyaM />
                    <SamH />
                    <JessH />
                </div>
                <div className="container">
                    <HannahM />
                </div>
            </div>
            
        </>
        
    );
}

export default Executive;