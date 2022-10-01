
import classes from "./Graphs.module.css"
import graph from "../../../Img/slide2.png";
import { useLocation } from "react-router-dom";

const Graphs = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className={classes.container}>
            <div>
                <img src={graph} alt="Correlation of Symptom" />
            </div>
            <div>
                
            </div>
        </div>

    )
}

export default Graphs;