
import { useContext, useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import classes from "./AeMain.module.css";
import vid from "../../../video/mask0001-0500.mp4"
import AuthContex from "../../../store/auth-context"

const AeMain = () => {
    const ctx = useContext(AuthContex)
    const data = ctx.text.AE;
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState(false);

    let fading = number > 0 && status === true ? classes.animation : classes.text;

    const videoRef = useRef();

    useEffect(() => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        const videoPlay = async () => {
            await delay(3000);
            videoRef.current.play();
        }
        videoPlay();

    }, [])

    return (
        <Parallax
            onProgressChange={(progress) => setNumber(progress)}
            onEnter={() => setStatus(true)}
            onExit={() => setStatus(false)}
        >
            <section className={classes.wrapper} >
                <h1>AllergoEye</h1>
                <div className={classes.wrap}>
                    <div className={classes.vidContainer}>
                        <video ref={videoRef} width="100%"
                            muted
                            playsInline
                            loop >
                            <source src={vid} type="video/mp4" />
                        </video>
                    </div>
                    <div className={`${fading} ${classes.textWrap}`}>
                        <p>
                            {data.p1}
                        </p>
                        <div className={classes.textContainer}>
                            <div>
                                <p>
                                    {data.divP1}
                                </p>
                                <p>
                                    {data.divP2}

                                </p>
                            </div>
                            <div>
                                <p>
                                    {data.divP3}
                                </p>
                                <p>
                                    {data.divP4}
                                </p>
                            </div>
                        </div>
                        <p>
                            {data.divP5}
                        </p>
                    </div>
                </div>
            </section>
        </Parallax>
    )
}

export default AeMain;