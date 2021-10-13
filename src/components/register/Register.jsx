import { useState } from 'react'

import { useHistory } from 'react-router'
import {createUser} from '../../services/UserService'
import './Register.css'


export default function Register() {
    const [error, setError] = useState()
    const { replace } = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "",
        name: "",
        image: undefined,
    })
    
    //Creamos funcion onChange
    const onChange = (event) => {
        //Coge el valor anterior (old) y devuelve ese valor cambiando la key del evento por el valor que hay en el evento
        setUser((old) => {
            //Creamos la constante value que almacenará un valor en función del tipo de input. Si es archivo (event.target.files[0]) o si no es archivo (event.target.value)
            const value = event.target.type === "file"? event.target.files[0] : event.target.value
            return { ...old, [event.target.name]: value}
        })
    }
    //Creamos funcion doLogin
    const doRegister = (event) => {
        event.preventDefault()
        //Como los datos le llegan como objeto, cuando segun nuestro modelo son strings, etc
        //debemos convertirlo a formato FormData
        const formData = new FormData()
        Object.keys(user).forEach((key) => {
            formData.append(key, user[key])
        })
        
        createUser(formData)
            .then(() => {
                replace("/login");
            })
            .catch((error) => setError(error.response.data.message));
    };

    return <div className="Register">
        {error && <p>Ha ocurrido un error: {error}</p>}
        <form onSubmit={doRegister}>
            <h2>Formulario de Registro</h2>
            <div>
                <label htmlFor="role">Soy...</label>
                
                <select value={user.role} id="role" name="role" onChange={onChange}>
                    <option value="Particular" >Particular</option>
                    <option value="Protectora">Protectora</option>
                    <option value="Abogado/a">Abogado/a</option>
                    <option value="Veterinario/a">Veterinario/a</option>
                </select>
                </div>
                {/* if(value==='Particular'){
                     <label htmlFor="identification">NIF/DNI</label>
                <input
                    name="identification"
                    id="identification"
                    value={user.identification}
                    onChange={onChange} />
                } */}
                {/* switch(user.role){
                    case 'Particular':
                <label htmlFor="identification">NIF/DNI</label>
                <input
                    name="identification"
                    id="identification"
                    value={user.identification}
                    onChange={onChange} />
                break;
                case 'Protectora':
                <label htmlFor="identification">CIF</label>
                <input
                    name="identification"
                    id="identification"
                    value={user.identification}
                    onChange={onChange} />
                break;
                } 
                <input
                    name="role"
                    id="name"
                    value={user.role}
                    onChange={onChange} />*/}
            {/* </div>  */}
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    id="name"
                    value={user.name}
                    placeholder="Escribe tu nombre completo aquí"
                    onChange={onChange} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={onChange} />
                <label htmlFor="password">Password</label>
            </div>
            <div>
                <input
                    name="password"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={onChange} />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input
                    name="image"
                    id="image"
                    type="file"
                    alt=""
                 onChange={onChange}/>
                {/* <img src={user.image} alt=""/> */}
               
            </div>
            <button type="submit">Submit</button>
        </form>
        
    </div>
}