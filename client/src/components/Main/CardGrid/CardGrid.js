
import { useContext, useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import classes from "./CardGrid.module.css"
import vid from "../../../video/mask0001-0500.mp4"
import AuthContext from "../../../store/auth-context"
import Arrow from '../../MainPage/Arrow';

const CardGrid = () => {
    const ctx = useContext(AuthContext)
    const data = ctx.text.Home.AllergoEye;
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState(false);

    let fading = number > 0 && status === true ? classes.animation : classes.text;

    const videoRef = useRef();

    useEffect(() => {

        videoRef.current.play();

    }, [])

    return (
        <Parallax
            onProgressChange={(progress) => setNumber(progress)}
            onEnter={() => setStatus(true)}
            onExit={() => setStatus(false)}
        >
            <section id="AE" className={classes.wrapper}>
                <div className={classes.vidContainer}>
                    <video ref={videoRef} width="100%"
                        muted
                        autoPlay
                        playsInline
                        loop >
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
                <div className={`${fading} ${classes.textWrap}`}>
                    <h1>{data.h1}</h1>
                    <h2>{data.h2}</h2>
                    <p>{data.p}
                        <br /><br />{data.Br1} <br />{data.Br2} <br />{data.Br3} <br />{data.Br4}
                    </p>
                </div>
            </section>
            <Arrow />
        </Parallax>
    )
}

export default CardGrid;