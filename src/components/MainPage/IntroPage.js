
import { useLocation } from "react-router-dom";
import BSText from "./BSText";
import module from "./IntroPage.module.css";
import IntroText from "./IntroText";
import ScText from "./ScText";


const IntroPage = () => {
    const location = useLocation();

    let text;
    
    if (location.pathname === "/scientific-work") { text = <ScText /> }
    else if (location.pathname === "/BusinessDevelopment") { text = <BSText />; }
    else {
        text = <IntroText />
    }

    return (
        <div className={module.wrap}>
            <div className={module.text}>
                {text}
            </div>
            <div className={module.canvasWrap}>
                <canvas className={module.canvas} id="c"></canvas>
            </div>
        </div>
    )
}

export default IntroPage;