import classes from "./Main.module.css"
import CardGrid from "./CardGrid/CardGrid";
import Form from "./Form/Form";


const Main = () => {

    return (
        <main  className={classes.wrap}>
            <CardGrid />
            <Form />
        </main>
    )
}

export default Main;