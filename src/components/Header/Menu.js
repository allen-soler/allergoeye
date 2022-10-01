import { push as Menu } from "react-burger-menu";
import home from "../../Img/home.png"
import ae from "../../Img/AE.png"
import sci from "../../Img/sci.png"
import BsDev from "../../Img/business.png"
import support from "../../Img/login.png"
import contact from "../../Img/mail.png"
import module from "./Icon.module.css"
import "./Menu.css"
import { NavLink } from "react-router-dom";

const MenuHamburger = () => {

    return (
        <Menu pageWrapId={"page-wrap"}>
            <div className={module.container}>
                <div>
                    <NavLink className="menu-item" to="/#home">
                        <img src={home} alt="Home" />
                        Home</NavLink>
                </div>
                <div>
                    <NavLink className="menu-item" to="/#AE">
                        <img src={ae} alt="Allergo Eye" />
                        Allergo Eye</NavLink>
                </div>
                <div>
                    <NavLink className="menu-item" to="/scientific-work">
                        <img src={sci} alt="Scientific Work" />
                        Scientific Work</NavLink>
                </div>
                <div>
                    <NavLink className="menu-item" to="/#BusinessDevelopment">
                        <img src={BsDev} alt="Business Development" />
                        Business Development</NavLink>
                </div>
                <div>
                    <NavLink className="menu-item" to="/#support">
                        <img src={support} alt="Support" />
                        Support</NavLink>
                </div>
                <div>
                    <NavLink className="menu-item" to="/#contact">
                        <img src={contact} alt="Contact" />
                        Contact</NavLink>
                </div>
            </div>
        </Menu>
    )
}

export default MenuHamburger;