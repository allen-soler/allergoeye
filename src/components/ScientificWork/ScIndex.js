import poster from "../../Img/Poster1.png";
import graphs from "../../Img/slide2.png"
import summary from "../../Img/AllergoEye-talk.png"

import classes from "./ScIndex.module.css"

const ScIndex = () => {
    return (
        <main className={classes.wrapper}>
            <section className={classes.poster}>
                <img src={poster} alt="Poster" />
            </section>
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
                    The recent validation study for AllergoEye not only showed a high sensitivity and specificity,
                    but also a correlation of evaluated symptoms with sIgE CAP classes, a feature which cannot
                    be detected by the commonly used subjective symptom scoring methodologies.
                </p>
            </section>
        </main>
    )
}

export default ScIndex;