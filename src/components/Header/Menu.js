import { slide as Menu } from "react-burger-menu";
import "./Menu.css"

const MenuHamburger = () => {

    return (
        <Menu pageWrapId={"page-wrap"}>
            <a id="home" className="menu-item" href="#page-wrap">Home</a>
            <a id="about" className="menu-item" href="#about">About</a>
            <a id="contact" className="menu-item" href="#contact">Contact</a>
        </Menu>
    )
}

export default MenuHamburger;