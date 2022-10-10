import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import AuthContext from '../../../store/auth-context';
import classes from './LogForm.module.css';

const LogForm = () => {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate();
    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const ageInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const password2InputRef = useRef();
    const recaptchaRef = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler =  (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            alert("ReCaptcha is not clicked");
            return (null)
        }
        console.log(recaptchaValue);
        setIsLoading(true);
        let url;
        let inputData;
        if (isLogin) {
            url = '/users/login';
            inputData = {
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value,
                name: "",
                surname: "",
                age: ""
            };

        } else {
            url = '/users';
            inputData = {
                email: emailInputRef.current.value,
                password: passwordInputRef.current.value,
                name: nameInputRef.current.value,
                surname: surnameInputRef.current.value,
                age: ageInputRef.current.value
            }
            if (inputData.password !== password2InputRef.current.value) {

                alert('Password is not the same')
                setIsLoading(false)
                return (
                    null
                )

            } else if (inputData.age < 18) {
                alert('You are too young')
                setIsLoading(false)
                return (
                    null
                )
            }
        }

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email: inputData.email,
                    password: inputData.password,
                    name: inputData.name,
                    surname: inputData.surname,
                    age: inputData.age
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then(data => {
                        let errorMessage = 'Authentication Failed';
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        throw new Error(errorMessage);
                    })
                }
            }).then(data => {
                const expTime = new Date(new Date().getTime() + (500000));
                ctx.login(data.token, inputData, expTime.toISOString());
                navigate('/Profile');
            }).catch((err) => {
                alert(err);
            })
    }
    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                {!isLogin && <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='name' id='name' required ref={nameInputRef} />
                </div>}
                {!isLogin && <div className={classes.control}>
                    <label htmlFor='surname'>Your surname</label>
                    <input type='surname' id='surname' required ref={surnameInputRef} />
                </div>}
                {!isLogin && <div className={classes.control}>
                    <label htmlFor='number'>Your Age</label>
                    <input type='number' id='age' required ref={ageInputRef} />
                </div>}
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordInputRef} />
                </div>
                {!isLogin && <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password2' required ref={password2InputRef} />
                </div>}

                <div className={classes.control}>
                     <ReCAPTCHA 
                        sitekey={"6Ldx7FwiAAAAAP6y-PjnC0aT-HFK62gF_LtAuF23"}
                        ref={recaptchaRef}

                     /> 
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Is Loading...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default LogForm;
