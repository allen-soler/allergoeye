
import { useContext, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import classes from "./AeMain.module.css"
import vid from "../../../video/AE_Workflow.mp4"
import AuthContext from "../../../store/auth-context"

const CardRight = () => {
    const ctx = useContext(AuthContext)
    const data = ctx.text.AE;
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState(false);

    let fading = number > 0 && status === true ? classes.animation : classes.text;



    return (
        <Parallax
            onProgressChange={(progress) => setNumber(progress)}
            onEnter={() => setStatus(true)}
            onExit={() => setStatus(false)}
        >
            <section className={classes.wrapperVid}>
                <div className={`${fading} ${classes.textWrap} ${classes.reSizeText}`}>
                    <p>
                        {data.RightP}
                    </p>
                </div>
                <div className={classes.vidContainer2}>
                    <video width="100%"
                        controls
                        playsInline
                    >
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
            </section>
        </Parallax>
    )
}

export default CardRight;