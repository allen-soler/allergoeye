import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <section className={`${classes.wrapper} ${props.classes}`} id={props.id}>
            {props.children}
        </section>
    )
}

export default Card;