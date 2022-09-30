import classes from './Header.module.css'

const Header = () => {


    return (
        <header id="home" className={classes.header}>
            <div className={classes.wrap}>
                <div className={classes.text}>
                    <h1>AI-MedImaging</h1>
                    <h2>Artificial Intelligence-based medical image analysis</h2>
                    <p>We use decades of experience in medicine and biomedical image analysis to develop new approaches for the automation and objective quantification of medical test which are currently subjective and/or qualitative. Our current focus are allergy test, for which we developed products for quantitative evualation of allergic reactions.</p>
                </div>
                <div className={classes.canvasWrap}>
                    <canvas className={classes.canvas} id="c"></canvas>
                </div>
            </div>
        </header>
    )
}
export default Header;