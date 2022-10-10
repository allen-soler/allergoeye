import { Fragment, useContext } from "react";
import classes from "./IntroPage.module.css";
import AuthContext from "../../store/auth-context"

const ScText = () => {
    const ctx = useContext(AuthContext);
    const data = ctx.text.ScWork;

    return (
        <Fragment>
            <h1>{data.h1 }</h1>
            <div className={classes.pWrap}>
                <p>{data.p1 }</p>
                <p>{data.p2}</p>
                <p>{data.p3}</p>
                <p>{data.p4}</p>
                <br />
                <p>{data.p5}</p>
                <p> <a className={classes.linkA} href="https://doi.org/10.1101/2022.03.23.22272791"> medrxiv.org/content/10.1101/2022.03.23.22272791v2</a></p>
            </div>
        </Fragment>
    )
}

export default ScText;