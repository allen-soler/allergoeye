import React, { useCallback, useEffect, useState } from "react"

let logOutTimer;

const AuthContext = React.createContext({
    user: '',
    token: '',
    isLoggedIn: false,
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

    const remiaingTime = calculateRemainingTime(storedTime)

    if (remiaingTime <= 3600) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('expirationTime')
        return (null)
    }

    return ({
        token: storedToken,
        time: remiaingTime,
        user: storedUser
    })
}

export const AuthContextProvider = (props) => {
    const tokenData = revitrieveToken();
    let initialToken;
    let initialUser;
    if (tokenData) { 
        initialToken = tokenData.token;
        initialUser = tokenData.user;
    }
    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(initialUser);

    const userIsLoggedIn = !!token;

    const logOutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token');

        if (logOutTimer) {
            clearTimeout(logOutTimer)
        }
    }, [])

    const loginHandler = (token, email, expirationTime) => {
        setToken(token)
        setUser(email);
        localStorage.setItem('user', email)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)

        const remiaingTime = calculateRemainingTime(expirationTime);

        logOutTimer = setTimeout(logOutHandler,remiaingTime);
    }

    useEffect(() => {
        if (tokenData) {
            logOutTimer = setTimeout(logOutHandler, tokenData.time)
        }
    }, [logOutHandler, tokenData])


    const contextValue = {
        user:user,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logOutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext