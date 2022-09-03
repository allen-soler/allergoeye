import classes from './Header.module.css'
import MenuHamburger from './Menu';

const Header = () => {


    return (
        <header id="home" className={classes.header}>
            <MenuHamburger />
            <div className={classes.wrap}>
                {/* <MovingComponent className={classes.text}
                    type="bounce"
                    duration="500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <h1>AI-MedImaging</h1>
                    <h2>AI Based medical imaging</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </MovingComponent> */}
                <div className={classes.text}>
                    <h1>AI-MedImaging</h1>
                    <h2>AI Based medical imaging</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                </div>
                <div className={classes.canvasWrap}>
                    <canvas className={classes.canvas} id="c"></canvas>
                </div>
            </div>
        </header>
    )
}
export default Header;