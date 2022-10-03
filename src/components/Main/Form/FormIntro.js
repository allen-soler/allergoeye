import classes from "./FormIntro.module.css"
import Card from "../../UI/Card/Card";
import Form from "./Form";

const FormIntro = () => {
    return (
        <Card classes={classes.formContainer}>
            <Form className={classes.form}/>
            <div className={classes.mapContainer}>
                <iframe title="AE Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.889013526185!2d13.68917104281489!3d51.073598821112135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cfc0ae406f2d%3A0x7eb18cd52969617a!2sOverbeckstra%C3%9Fe%2033%2C%2001139%20Dresden%2C%20Allemagne!5e0!3m2!1sfr!2sch!4v1664473510854!5m2!1sfr!2sch" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={classes.footer}>
                <div>
                    <a href="/Impressum" alt="Impressum">Impressum</a>
                    <a href="/DataProtection" alt="Data protection">Data protection</a>
                    <a href="/TermsandConditions" alt="Terms and conditions">Terms and conditions</a>
                </div>
            </div>
        </Card>
    )
}

export default FormIntro;