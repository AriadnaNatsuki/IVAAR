import React, { useEffect, useState } from 'react'
import { getCurrentUser } from '../services/UserService'
import { deleteAcessToken, getAccessToken, setAccessToken } from '../store/AccessTokenStore'
import {login} from '../services/AuthService'
//Creamos el contexto
export const AuthContext = React.createContext({
    user: undefined,
    token: undefined
})

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState()
    const [token, setToken] = useState(getAccessToken)
    useEffect(() => {
        //Si hay un token en el contexto pero no hay user => Consigue Token
        if (token) {
            if (!user) {
                getCurrentUser()
                    .then((user) => setUser(user))
                    //Si el token está caducado => Borrar Toker del contexto y de localStorage
                    .catch(() => {
                        deleteAcessToken()
                        setToken(undefined)
                    })
            }   
        }
         //Si no hay token => Borrar user
        else {
            setUser(undefined)
        }
    }, [token, user])

    const loginFn = (email, password) => {
        return login(email, password).then((response) => {
            setAccessToken(response.access_token)
            setToken(response.access_token)
        })
    }
    const logout = () => {
        deleteAcessToken()
        setToken()
    }
    const value = { user: user, token: token, login:loginFn, logout }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}