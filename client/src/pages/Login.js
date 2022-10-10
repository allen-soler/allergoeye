import Header from "../components/Header/Header";
import LogForm from "../components/Main/Login/LogForm";
import Footer from "../components/MainPage/Footer"

const Login = () => {

    return (
        <div id="page-wrap" >
            <Header>
                <LogForm />
            </Header>
            <Footer />
        </div>
    )
}

export default Login;