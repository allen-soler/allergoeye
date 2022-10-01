import { push as Menu } from "react-burger-menu";
import home from "../../Img/home.png"
import ae from "../../Img/AE.png"
import sci from "../../Img/sci.png"
import BsDev from "../../Img/business.png"
import support from "../../Img/login.png"
import contact from "../../Img/mail.png"
import module from "./Icon.module.css"
import "./Menu.css"

const MenuHamburger = () => {
    return (
        <Menu pageWrapId={"page-wrap"}>
            <div className={module.container}>
                <div>
                    <a className="menu-item" href="/#home">
                        <img src={home} alt="Home" />
                        Home</a>
                </div>
                <div>
                    <a className="menu-item" href="/#AE">
                        <img src={ae} alt="Allergo Eye" />
                        Allergo Eye</a>
                </div>
                <div>
                    <a className="menu-item" href="/scientific-work">
                        <img src={sci} alt="Scientific Work" />
                        Scientific Work</a>
                </div>
                <div>
                    <a className="menu-item" href="/#BusinessDevelopment">
                        <img src={BsDev} alt="Business Development" />
                        Business Development</a>
                </div>
                <div>
                    <a className="menu-item" href="/#support">
                        <img src={support} alt="Support" />
                        Support</a>
                </div>
                <div>
                    <a className="menu-item" href="/#contact">
                        <img src={contact} alt="Contact" />
                        Contact</a>
                </div>
            </div>
        </Menu>
    )
}

export default MenuHamburger;