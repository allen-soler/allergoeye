import { Fragment, useContext } from "react"
import AuthContext from "../../store/auth-context"

const IntroText = () => {
    const ctx = useContext(AuthContext);
    const data = ctx.text.Home.intro;

    return (
        <Fragment>
            <h1>{data.h1}</h1>
            <h2>{data.h2}</h2>
            <p>{data.p}</p>
        </Fragment>
    )
}

export default IntroText;