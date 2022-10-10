
import { useLocation } from "react-router-dom";
import BSText from "./BSText";
import module from "./IntroPage.module.css";
import IntroText from "./IntroText";
import ScText from "./ScText";
import { Fragment } from "react";

const IntroPage = () => {
    const location = useLocation();

    let text;

    if (location.pathname === "/scientific-work") { text = <ScText /> }
    else if (location.pathname === "/BusinessDevelopment") { text = <BSText />; }
    else {
        text = <IntroText />
    }

    return (
        <Fragment>

            <div className={module.wrap}>
                <div className={module.text}>
                    {text}
                </div>
                <div className={module.canvasWrap}>
                    <canvas className={module.canvas} id="c"></canvas>
                </div>
            </div>
        </Fragment>
    )
}

export default IntroPage;