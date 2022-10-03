import Header from "../components/Header/Header.js"
import CardGrid from "../components/Main/CardGrid/CardGrid.js";
import Main from "../components/Main/Main.js"
import IntroPage from "../components/MainPage/IntroPage.js";
import FormIntro from "../components/Main/Form/FormIntro.js";

const Mainpage = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <IntroPage />
            </Header>
            <Main>
                <CardGrid />
                <FormIntro />
            </Main>
        </div>
    )
}

export default Mainpage;