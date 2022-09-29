import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "./Form.module.css"
import { useReducer, useRef } from "react";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false };
}

const nameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
}

const textReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: '', isValid: false };
}

const Form = () => {
    const emailInput = useRef();
    const nameInput = useRef();
    const textInput = useRef();


    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
    const [nameState, dispatchName] = useReducer(nameReducer, { value: '', isValid: null });
    const [textState, dispatchText] = useReducer(textReducer, { value: '', isValid: null });


    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    const nameChangeHandler = (event) => {
        dispatchName({ type: 'USER_INPUT', val: event.target.value });
    };

    const textChangeHandler = (event) => {
        dispatchText({ type: 'USER_INPUT', val: event.target.value });
    };


    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Card classes={classes.formContainer} id="contact">
            <div className={classes.formWrap}>
                <div className={classes.formChildWrap}>
                    <h1 className={classes.h1}>Contact Us</h1>

                    <form onSubmit={submitHandler}>
                        <Input ref={emailInput} label={'E-mail'} id={'email'} isValid={emailState.isValid} type={'email'} value={emailState.value} onChange={emailChangeHandler} />
                        <Input ref={nameInput} label={'name'} id={'name'} isValid={emailState.isValid} type={'name'} value={nameState.value} onChange={nameChangeHandler} />
                        <Input ref={textInput} label={'text'} id={'text'} isValid={emailState.isValid} type={'text'} value={textState.value} onChange={textChangeHandler} />
                        <div className={classes.actions}>
                            <Button type="submit" className={classes.btn}>
                                SEND
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={classes.mapContainer}>
            <iframe title="AE Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.889013526185!2d13.68917104281489!3d51.073598821112135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cfc0ae406f2d%3A0x7eb18cd52969617a!2sOverbeckstra%C3%9Fe%2033%2C%2001139%20Dresden%2C%20Allemagne!5e0!3m2!1sfr!2sch!4v1664473510854!5m2!1sfr!2sch" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
        </Card>
    )
}

export default Form;