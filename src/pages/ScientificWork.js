import { Fragment } from "react";
import Header from "../components/Header/Header";
import IntroPage from "../components/MainPage/IntroPage.js";
import ScIndex from "../components/ScientificWork/ScIndex.js";

const ScientificWork = () => {
    return (
        <Fragment>
            <Header>
                <IntroPage />
            </Header>
            <ScIndex />
        </Fragment>
    )
}

export default ScientificWork;