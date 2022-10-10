import { Fragment, useContext } from "react"
import AuthContext from "../../store/auth-context";

const BSText = () => {
    const ctx = useContext(AuthContext);
    const data = ctx.text.BsDev;

    return (
        <Fragment>
            <h1>{data.h1}</h1>
            <p>{data.p1}</p>
            <p>{data.p2}</p>
        </Fragment>
    )
}

export default BSText;