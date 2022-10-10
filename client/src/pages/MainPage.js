import Header from "../components/Header/Header.js"
import CardGrid from "../components/Main/CardGrid/CardGrid.js";
import Main from "../components/Main/Main.js"
import IntroPage from "../components/MainPage/IntroPage.js";
import FormIntro from "../components/Main/Form/FormIntro.js";
import Footer from "../components/MainPage/Footer.js";
import Arrow from "../components/MainPage/Arrow.js";

const Mainpage = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <IntroPage />
                <Arrow />
            </Header>
            <Main>
                <CardGrid />
                <FormIntro />
                <Footer />
            </Main>
        </div>
    )
}

export default Mainpage;