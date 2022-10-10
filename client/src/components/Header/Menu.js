import { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import AuthContext from "../../store/auth-context";
import home from "../../Img/home.png"
import ae from "../../Img/AE.png"
import sci from "../../Img/sci.png"
import BsDev from "../../Img/business.png"
import support from "../../Img/login.png"
import contact from "../../Img/mail.png"
import module from "./Icon.module.css"
import "./Menu.css"

const MenuHamburger = () => {
    const ctx = useContext(AuthContext);

    const logOutHandler = () => {
        ctx.logout();
    }

    return (
        <Menu width={'230px'} pageWrapId={"page-wrap"}>
            <div className={module.container}>
                <div>
                    <a className="menu-item" href="/Home">
                        <img src={home} alt="Home" />
                        Home</a>
                </div>
                {ctx.user && <div>
                    <a className="menu-item" href="/Profile">
                        <img src={home} alt="Profile" />
                        Profile</a>
                </div>}
                <div>
                    <a className="menu-item" href="/AE">
                        <img src={ae} alt="Allergo Eye" />
                        Allergo Eye</a>
                </div>
                <div>
                    <a className="menu-item" href="/scientific-work">
                        <img src={sci} alt="Scientific Work" />
                        Scientific Work</a>
                </div>
                <div>
                    <a className="menu-item" href="/BusinessDevelopment">
                        <img src={BsDev} alt="Business Development" />
                        Business Development</a>
                </div>
                <div>

                    {!ctx.isLoggedIn &&
                        <a className="menu-item" href="/Login">
                            <img src={support} alt="Login" />
                            Login</a>}
                    {ctx.isLoggedIn &&
                        <a className="menu-item" href="/" onClick={logOutHandler}>
                            <img src={support} alt="Logout" />
                            Logout</a>}
                </div>
                <div>
                    <a className="menu-item" href="/contact">
                        <img src={contact} alt="Contact" />
                        Contact</a>
                </div>
            </div>
        </Menu>
    )
}

export default MenuHamburger;