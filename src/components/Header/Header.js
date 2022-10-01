import { Fragment } from 'react';
import module from './Header.module.css'

const Header = (props) => {
    const langOnClick = (e) => {
        e.preventDefault();
    } 

    return (
        <header id="home" className={module.header}>
            <div className={module.langMenu}>
                <a id="EN" onClick={langOnClick} href="EN">EN</a>
                <a id="DE" onClick={langOnClick} href="DE">DE</a>
            </div>
            <Fragment>
                {props.children}
            </Fragment>
        </header>
    )
}
export default Header;