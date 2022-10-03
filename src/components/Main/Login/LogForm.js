import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "../Form/Form.module.css"
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

const LogForm = (props) => {
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
    )
}

export default LogForm;