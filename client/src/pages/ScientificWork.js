import Header from "../components/Header/Header";
import Arrow from "../components/MainPage/Arrow";
import Footer from "../components/MainPage/Footer";
import IntroPage from "../components/MainPage/IntroPage.js";
import ScIndex from "../components/ScientificWork/ScIndex.js";

const ScientificWork = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <IntroPage />
                <Arrow />
            </Header>
            <ScIndex />
            <Footer />
        </div>
    )
}

export default ScientificWork;