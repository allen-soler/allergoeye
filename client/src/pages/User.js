import { Fragment, useContext } from "react";
import Header from "../components/Header/Header";
import AuthContext from "../store/auth-context";

const User = () => {
    const ctx = useContext(AuthContext);

    return (
        <Fragment>
            <Header>
                <div >
                    <h2>User : {ctx.user.name} </h2>
                    <h2>Surname : {ctx.user.surname} </h2>
                    <h2>Age : {ctx.user.age} </h2>
                    <h2>Email : {ctx.user.email} </h2>
                    <p>Product : None</p>
                </div>
            </Header>
        </Fragment>
    )
}

export default User;