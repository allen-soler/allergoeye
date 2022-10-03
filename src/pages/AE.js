import Header from "../components/Header/Header"
import IntroPage from "../components/MainPage/IntroPage.js";
import AeMain from "../components/Main/AE/AeMain";
import CardRight from "../components/Main/AE/CardRight";
import Main from "../components/Main/Main";
import Form from "../components/Main/Form/Form";


const AE = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <IntroPage />
            </Header>
            <Main>
                <AeMain />
                <CardRight />
                <Form />
            </Main>
        </div>
    )
}

export default AE;