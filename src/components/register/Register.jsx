import { useState } from 'react'

import { useHistory } from 'react-router'
import { createUser } from '../../services/UserService'
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
        identification_professional: "",
        identification_particular:""
    })

    //Creamos funcion onChange
    const onChange = (event) => {
        //Coge el valor anterior (old) y devuelve ese valor cambiando la key del evento por el valor que hay en el evento
        setUser((old) => {
            //Creamos la constante value que almacenará un valor en función del tipo de input. Si es archivo (event.target.files[0]) o si no es archivo (event.target.value)
            const value = event.target.type === "file" ? event.target.files[0] : event.target.value
            return { ...old, [event.target.name]: value }
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
            {/* ROLE */}
            <div>
                <label htmlFor="user">Soy...</label>

                <select value={user.role} id="role" name="role" onChange={onChange}>
                    <option value="Particular" >Particular</option>
                    <option value="Protectora">Protectora</option>
                    <option value="Abogado/a">Abogado/a</option>
                    <option value="Veterinario/a">Veterinario/a</option>
                </select>
            </div>

            <div>
                {(user.role === 'Particular' || user.role === 'Protectora') ?
                    <>
                        <label htmlFor="name">NIF/NIE</label>
                        <input
                            name="identification_particular"
                            id="_particular"
                            placeholder="DNI/NIE con letra y sin espacios. Ejemplo:  12345678Z"
                            value={user.identification_particular}
                            onChange={onChange} /> </> :
                    <>
                        <label htmlFor="name">Nº colegiado </label>
                        <input
                            name="identification_professional"
                            id="identification_professional"
                            placeholder="Debe contener 10 dígitos, si es de 8 complete con ceros a la izquierda"
                            value={user.identification_professional}
                            onChange={onChange} /> </>}

            </div>


            {/* NOMBRE */}
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    id="name"
                    value={user.name}
                    placeholder="Escribe tu nombre completo aquí"
                    onChange={onChange} />
            </div>
            {/* EMAIL */}
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={onChange} />

            </div>
            {/* CONTRASEÑA */}
            <div>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={onChange} />
            </div>
            {/* IMAGEN */}
            <div>
                <label htmlFor="image">Image</label>
                <input
                    name="image"
                    id="image"
                    type="file"
                    alt=""
                    onChange={onChange} />
                {/* <img src={user.image} alt=""/> */}

            </div>
            <button type="submit">Submit</button>
        </form>

    </div>
}