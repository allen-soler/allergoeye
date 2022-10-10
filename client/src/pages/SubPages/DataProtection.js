import { useContext } from "react";
import Header from "../../components/Header/Header"
import AuthContext from "../../store/auth-context";

const DataProtection = () => {
    const ctx = useContext(AuthContext);

    return (
        <Header>
            <p>
                {ctx.text.DataProtection.p}
            </p>
        </Header>
    )
}

export default DataProtection;