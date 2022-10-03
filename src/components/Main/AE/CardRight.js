
import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import classes from "./AeMain.module.css"
import vid from "../../../video/AE_Workflow.mp4"

const CardRight = () => {
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
            <section className={classes.wrapper}>
                <div className={`${fading} ${classes.textWrap} ${classes.reSizeText}`}>
                    <p>
                        AllergoEye involves a simple and fast workflow. After applying the allergen solution to the
                        patient’s eyes, the eyes are captured with the smartphone camera by using the included
                        face mask. The eyes are shot in three positions: straight, right and left side. The images are
                        then transferred to the computer, where the sclera is automatically detected and the eye
                        redness score calculated, determining the strength of the reaction. Any archived tests can be
                        accessed for comparison and development analysis. The results can be exported to external
                        statistical softwares or as written reports.
                    </p>
                </div>
                <div className={classes.vidContainer2}>
                    <video ref={videoRef} width="100%"
                         autoPlay={false}
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