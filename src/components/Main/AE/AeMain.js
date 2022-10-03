
import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import classes from "./AeMain.module.css";
import vid from "../../../video/mask0001-0500.mp4"

const AeMain = () => {
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
                    <h1>AllergoEye</h1>
                    <p>
                        AllergoEye (CE certified as a 93/42/EWG class 1 product) is an automatic system based on
                        artificial intelligence and neural networks, developed using the latest machine learning /
                        deep learning methods. The conjunctival provocation test offers a fast, simple and highly
                        sensitive method for allergy recognition, however it lacks objective qualitative measures.
                        AllergoEye solves this problem by offering qualitative and quantitative measurement and
                        analysis of the scleral allergic reaction. The system documents the acquired results, allowing
                        for longterm comparison and access.
                        The system is devoted for
                    </p>
                    <div className={classes.textContainer}>
                        <div>
                            <p>
                                Private doctor’s office/praxis
                            </p>
                            <p>
                                Control the effectiveness of specific
                                immunotherapy and symptomatic therapy
                            </p>
                        </div>
                        <div>
                            <p>
                                Clinical studies
                            </p>
                            <p>
                                Select the best suitable, sensible patients
                                for a solid patient base for your clinical
                                study, significantly raising the success rate.
                            </p>
                        </div>
                    </div>
                    <p>
                        It consists of two components, a smartphone-based application and a PC-based software.
                        For the optimization of environmental lighting the product comes with a special face mask in
                        which the smartphone is inserted for photo capturing.
                    </p>
                </div>
            </section>
        </Parallax>
    )
}

export default AeMain;