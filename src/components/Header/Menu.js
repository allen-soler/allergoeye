import { slide as Menu } from "react-burger-menu";
import "./Menu.css"

const MenuHamburger = () => {

    return (
        <Menu pageWrapId={"page-wrap"}>
            <a  className="menu-item" href="#home">Home</a>
            <a  className="menu-item" href="#about">About</a>
            <a  className="menu-item" href="#price">Price</a>
            <a  className="menu-item" href="#contact">Contact</a>
        </Menu>
    )
}

export default MenuHamburger;