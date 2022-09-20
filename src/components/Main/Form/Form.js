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

const phoneReducer = (state, action) => {
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
    const passwordInput = useRef();


    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
    const [phoneState, dispatchPhone] = useReducer(phoneReducer, { value: '', isValid: null });

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPhone({ type: 'USER_INPUT', val: event.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Card classes={classes.formContainer} id="contact">
            <div  className={classes.formWrap}>
                <div className={classes.formChildWrap}>
                    <form onSubmit={submitHandler}>
                        <Input ref={emailInput} label={'E-mail'} id={'email'} isValid={emailState.isValid} type={'email'} value={emailState.value} onChange={emailChangeHandler} />
                        <Input ref={passwordInput} label={'Password'} id={'password'} isValid={phoneState.isValid} type={'password'} value={phoneState.value} onChange={passwordChangeHandler} />
                        <div className={classes.actions}>
                            <Button type="submit" className={classes.btn}>
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h1>Contact Us</h1>
            </div>
        </Card>
    )
}

export default Form;