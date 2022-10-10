import React, { useCallback, useEffect, useState } from "react"

let logOutTimer;

const AuthContext = React.createContext({
    user: '',
    token: '',
    isLoggedIn: false,
    languageID: '',
    login: (token) => { },
    logout: () => { }
})

const calculateRemainingTime = (expirationTime) => {
    const currenTime = new Date().getTime();
    const adjExperiationTime = new Date(expirationTime).getTime();

    const remiaingDuration = adjExperiationTime - currenTime;

    return remiaingDuration;
}

const revitrieveToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedTime = localStorage.getItem('expirationTime')
    const storedUser = localStorage.getItem('user');
    const storedAge = localStorage.getItem('age');
    const storedsurname = localStorage.getItem('surname')
    const storedEmail = localStorage.getItem('email')
    const remiaingTime = calculateRemainingTime(storedTime)

    if (remiaingTime <= 3600) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('surname')
        localStorage.removeItem('age')
        localStorage.removeItem('email')
        localStorage.removeItem('expirationTime')
        
        return (null)
    }

    return ({
        token: storedToken,
        time: remiaingTime,
        userData: { 
            user: storedUser,
            surname: storedsurname,
            age: storedAge,
            email: storedEmail
        }
    })
}

export const AuthContextProvider = (props) => {
    const tokenData = revitrieveToken();

    let language = localStorage.getItem('language');
    let initialToken;
    let userData;
    if (!language) {
        language = "DE";
    }
    if (tokenData) {
        initialToken = tokenData.token;
        userData = tokenData.userData;
    }
    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(userData);
    let languageText = {};
    languageText = Object.assign(languageText, require(`../i18n/${language.toLocaleLowerCase()}.json`));

    const userIsLoggedIn = !!token;

    const logOutHandler = useCallback(() => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('surname');
        localStorage.removeItem('age');
        localStorage.removeItem('email');

        if (logOutTimer) {
            clearTimeout(logOutTimer)
        }
    }, [])

    const loginHandler = (token, data, expirationTime) => {
        setToken(token)
        setUser(data);
        localStorage.setItem('user', data.name)
        localStorage.setItem('surname', data.surname)
        localStorage.setItem('email', data.email)
        localStorage.setItem('age', data.age)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)

        const remiaingTime = calculateRemainingTime(expirationTime);

        logOutTimer = setTimeout(logOutHandler, remiaingTime);
    }





    useEffect(() => {
        if (tokenData) {
            logOutTimer = setTimeout(logOutHandler, tokenData.time)
        }
    }, [logOutHandler, tokenData])


    const contextValue = {
        user: user,
        token: token,
        isLoggedIn: userIsLoggedIn,
        languageID: language,
        text: languageText,
        login: loginHandler,
        logout: logOutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext