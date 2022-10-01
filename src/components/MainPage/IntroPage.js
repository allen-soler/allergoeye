
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import module from "./IntroPage.module.css";
import IntroText from "./IntroText";
import ScText from "./ScText";

const IntroPage = () => {
    const location = useLocation();
    const refCanvas = useRef();

    let text = location.pathname === "/scientific-work" ? <ScText/> : <IntroText />;
    
    console.log(refCanvas);
    return (
        <div className={module.wrap}>
            <div className={module.text}>
                {text}
            </div>
            <div className={module.canvasWrap}>
                <canvas ref={refCanvas} className={module.canvas} id="c"></canvas>
            </div>
        </div>
    )
}

export default IntroPage;