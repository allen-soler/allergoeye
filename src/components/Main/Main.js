import classes from "./Main.module.css"

const Main = (props) => {
    return (
        <main  className={classes.wrap}>
            {props.children}
        </main>
    )
}

export default Main;