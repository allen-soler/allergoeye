import { Fragment } from "react";
import classes from "./IntroPage.module.css";

const ScText = () => {

    return (
        <Fragment>
            <h1>Scientific Work</h1>
            <div className={classes.pWrap}>
                <p>We develop novel approaches and technologies for image-based, quantitative medical
                    tests.[1]</p>
                <p>We carry out the full cycle of product development, starting from scientific ideas through
                    software development, mechanical product design and production.</p>
                <p>
                    Our first product, AllergoEye, is CE-registered as a 93/42/EWG class 1 product.
                </p>
                <p>[1] Validation of AI-based software for objectification of conjunctival provocation test results
                    in routine examinations and clinical studies</p>
                <br />
                <p>
                    Yury Yarin, Alexandra Kalaitzidi, Kira Bodrova, Ralf Mösges, Yannis Kalaidzidis
                </p>
                <p> <a className={classes.linkA} href="https://doi.org/10.1101/2022.03.23.22272791"> medrxiv.org/content/10.1101/2022.03.23.22272791v2</a></p>
            </div>
        </Fragment>
    )
}

export default ScText;