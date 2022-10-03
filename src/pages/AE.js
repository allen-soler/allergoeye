import Header from "../components/Header/Header"
import AeMain from "../components/Main/AE/AeMain";
import CardRight from "../components/Main/AE/CardRight";
import Main from "../components/Main/Main";
import Form from "../components/Main/Form/Form";


const AE = () => {
    return (
        <div id="page-wrap" >
            <Header>
                <AeMain />
            </Header>
            <Main>
                <CardRight />
                <Form />
            </Main>
        </div>
    )
}

export default AE;