import Header from "../components/Header/Header";
import IntroPage from "../components/MainPage/IntroPage.js";
import ScIndex from "../components/ScientificWork/ScIndex.js";

const ScientificWork = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <IntroPage />
            </Header>
            <ScIndex />
        </div>
    )
}

export default ScientificWork;