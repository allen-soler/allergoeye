import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div>
                <a href="/Imprint" alt="Imprint">Imprint</a>
                <a href="/DataProtection" alt="Data protection">Data protection</a>
                <a href="/TermsandConditions" alt="Terms and conditions">Terms and conditions</a>
            </div>
        </div>
    )
}

export default Footer;