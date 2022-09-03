import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <section className={`${classes.wrapper} ${props.classes}`}>
            {props.children}
        </section>
    )
}

export default Card;