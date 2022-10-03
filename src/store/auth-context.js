import React, { useCallback, useEffect, useState } from "react"

let logOutTimer;

const AuthContext = React.createContext({
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

    const remiaingTime = calculateRemainingTime(storedTime)

    if (remiaingTime <= 3600) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return (null)
    }

    return ({
        token: storedToken,
        time: remiaingTime
    })
}

export const AuthContextProvider = (props) => {
    const tokenData = revitrieveToken();
    let initialToken;
    if (tokenData) { initialToken = tokenData.token }
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const logOutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token');

        if (logOutTimer) {
            clearTimeout(logOutTimer)
        }
    }, [])

    const loginHandler = (token, expirationTime) => {
        setToken(token)
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
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logOutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext