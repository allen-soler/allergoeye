
import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import classes from "./CardGrid.module.css"
import vid from "../../../video/mask0001-0500.mp4"

const CardGrid = () => {
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState(false);

    let fading = number > 0.35 && status === true ? classes.animation : classes.text;

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
                <div className={classes.imageContainer}>
                    <video ref={videoRef} width="100%"
                        muted
                        autoPlay
                        loop >
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
                <div className={fading}>
                    <h1>AllergoEye</h1>
                    <h2>Objective quantitative measurement of allergic reaction</h2>
                    <p>
                        Provocation testing is widely used in allergy to reveal a patient's susceptibility to a specific allergen, Due to the lac of objective quantitative measures, the conjunctival provaction test (CPT) is a less commonly used method despite its sensitivity and simplicity. We developed a new AI-based system "AllergoEye" for quantitative assessment and documenting of allergic conjunctival reactions. <br /><br />Our system is devoted for : <br />Allergy diagnostic <br />Allergy immunotherapy control <br />Patient selection for medication clinical studies
                    </p>
                </div>
            </section>
        </Parallax>
    )
}

export default CardGrid;