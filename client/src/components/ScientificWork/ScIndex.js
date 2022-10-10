import poster from "../../Img/Poster1.png";
import graphs from "../../Img/slide2.png"
import summary from "../../Img/AllergoEye-talk.png"

import classes from "./ScIndex.module.css"
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Arrow from "../MainPage/Arrow";
import { Parallax } from "react-scroll-parallax";

const ScIndex = () => {
    const ctx = useContext(AuthContext);

    return (
        <main className={classes.wrapper}>
            <Parallax>
                <section className={classes.poster}>
                    <div><img src={poster} alt="Poster" /></div>
                    <div>
                        <Arrow />
                    </div>
                </section>
            </Parallax>
            <section className={classes.wrap}>


                <div className={classes.container}>
                    <div>
                        <img src={graphs} alt="Graphs" />
                    </div>
                    <div>
                        <img src={summary} alt="Graphs" />
                    </div>
                </div>
                <p>
                    {ctx.text.ScWork.footer}
                </p>
            </section>
        </main>
    )
}

export default ScIndex;