import { useContext } from "react";
import Header from "../../components/Header/Header"
import AuthContext from "../../store/auth-context";

const Impressum = () => {
    const ctx = useContext(AuthContext);
    return (
        <Header>
            <p>
            {ctx.text.Impressum.p}
            </p>
        </Header>
    )
}

export default Impressum;