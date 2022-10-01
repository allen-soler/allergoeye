import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import IntroPage from "../components/MainPage/IntroPage.js";

const Mainpage = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <IntroPage />
            </Header>
            <Main />
        </div>
    )
}

export default Mainpage;