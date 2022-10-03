import { Fragment, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import module from './Header.module.css'

const Header = (props) => {

    const ctx = useContext(AuthContext)
    const langOnClick = (e) => {
        e.preventDefault();
    }

    return (
        <header id="home" className={module.header}>
            <div className={module.wrapper}>
                <div className={module.langMenu}>
                    <a id="EN" onClick={langOnClick} href="EN">EN</a>
                    <a id="DE" onClick={langOnClick} href="DE">DE</a>
                </div>
                <div className={module.user}>
                    <p>{ctx.user}</p>
                </div>
            </div>
            <Fragment>
                {props.children}
            </Fragment>
        </header>
    )
}
export default Header;