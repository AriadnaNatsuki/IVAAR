import {useState, useContext} from 'react'
import { useHistory } from 'react-router'
import { useAuth } from '../../hooks/useAuth'
export default function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState()
    const { login } = useAuth()
    const {replace}= useHistory()
    //Creamos funcion onChange
    const onChange = (event) => {
        //Coge el valor anterior (old) y devuelve ese valor cambiando la key del evento por el valor que hay en el evento
        setCredentials((old)=>({...old, [event.target.name]:event.target.value}))
    }
    //Creamos funcion doLogin
    const doLogin = (event) => {
        event.preventDefault()
        login(credentials.name, credentials.password)
            .then(() => {
                    
                })
        .catch((e)=>setError(e))
    }
    return <div className="Login">
        {error && <p>Ha ocurrido un error: {error.error}</p>}
        <form onSubmit={doLogin}>
            <label htmlFor="email">Email</label>
            <input
                name="email"
                id="email"
                value={credentials.email}
                onChange={onChange} />
            <label htmlFor="password">Password</label>
            <input
                name="password"
                id="password"
                value={credentials.password}
                onChange={onChange} />
            <button type="submit">Log in</button>
        </form>
    </div>
}