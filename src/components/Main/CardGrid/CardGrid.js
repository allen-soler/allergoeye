
import { Parallax } from 'react-scroll-parallax';
import classes from "./CardGrid.module.css"
import imageSrc from "../../../Img/logo.jpeg"
import { useState } from 'react';

const CardGrid = () => {
    const [number, setNumber] = useState(0);
    const [status, setStatus] = useState(false);
    let fading = number > 0.35 && status === true ? classes.animation : "";
    console.log(number)
    console.log(status);


    return (
        <Parallax
            onProgressChange={(progress) => setNumber(progress)}
            onEnter={() => setStatus(true)}
            onExit={() => setStatus(false)}
        >
            <section id="about" className={classes.wrapper}>
                <div className={classes.imageContainer}>
                    <img src={imageSrc} alt="Eye AI"/>
                </div>
                <div className={`${classes.text}  ${fading}`} >
                    <h1>AllergoEye - detecting redness in eyes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate enim non consectetur facilisis. Vestibulum ac vulputate arcu, id fringilla enim. Praesent nec luctus felis. Proin lobortis vestibulum purus eu euismod. Duis non nisi facilisis, rutrum turpis et, sollicitudin eros. Mauris molestie erat in ornare tincidunt. Cras porttitor, risus nec euismod tempor, purus quam scelerisque dolor, id fringilla arcu tellus ac est.
                        <br /><br />
                        Curabitur quis tempus est. Morbi ullamcorper massa eget risus dapibus auctor. Praesent lacus nunc, eleifend non elementum ut, dictum tristique ipsum. Donec non vestibulum enim, sit amet tincidunt augue. Nunc imperdiet dui nunc, eget sodales elit sodales sit amet. Maecenas scelerisque, urna eu dapibus consectetur, mi purus molestie turpis, et malesuada sapien diam non diam. Aenean vulputate dui vitae commodo sollicitudin. </p>
                </div>
            </section>
        </Parallax>
    )
}

export default CardGrid;