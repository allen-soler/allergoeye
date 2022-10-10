import Header from "../components/Header/Header"
import AeMain from "../components/Main/AE/AeMain";
import CardRight from "../components/Main/AE/CardRight";
import Main from "../components/Main/Main";
import Arrow from "../components/MainPage/Arrow";
import Footer from "../components/MainPage/Footer";


const AE = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <AeMain />
                <Arrow />
            </Header>
            <Main>
                <CardRight />
                <Footer />
            </Main>
        </div>
    )
}

export default AE;