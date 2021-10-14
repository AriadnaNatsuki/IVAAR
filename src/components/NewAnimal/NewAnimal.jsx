import { useState } from 'react'

import { useHistory } from 'react-router'
import { createanimal } from '../../services/animalService'



export default function NewAnimal() {

    const [error, setError] = useState()
    const { replace } = useHistory()
    const [animal, setanimal] = useState({
        name: "",
        species: "",
        genre: "",
        age: "",
        weight: "",
        breed: "",
        fosterhome: "",
        image: undefined,
        sterilized: "",
        diseases: "",
        diseases_description: "",
        microchip: "",
        description: "",
        town: "",
        province: ""

    })

    //Creamos funcion onChange
    const onChange = (event) => {
        //Coge el valor anterior (old) y devuelve ese valor cambiando la key del evento por el valor que hay en el evento
        setanimal((old) => {
            //Creamos la constante value que almacenará un valor en función del tipo de input. Si es archivo (event.target.files[0]) o si no es archivo (event.target.value)
            const value = event.target.type === "file" ? event.target.files[0] : event.target.value
            return { ...old, [event.target.name]: value }
        })
    }
    //Creamos funcion doLogin
    const doNewAnimal = (event) => {
        event.preventDefault()
        //Como los datos le llegan como objeto, cuando segun nuestro modelo son strings, etc
        //debemos convertirlo a formato FormData
        const formData = new FormData()
        Object.keys(animal).forEach((key) => {
            formData.append(key, animal[key])
        })

        createanimal(formData)
            .then(() => {
                replace("/");
            })
            .catch((error) => setError(error.response.data.message));
    };

    return <div className="NewAnimal">
        {error && <p>Ha ocurrido un error: {error}</p>}
        <form onSubmit={doNewAnimal}>
            <h2>Formulario Alta Animal</h2>

            {/* NOMBRE */}
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    id="name"
                    value={animal.name}
                    placeholder="Escribe el  nombre del animal aquí"
                    onChange={onChange} />
            </div>
            {/* ESPECIE ANIMAL */}
            <div>
                {/* <label htmlFor="animal">Es de la especie...</label> */}
                <legend>Es de la especie...</legend>
                <select value={animal.species} id="species" name="species" onChange={onChange}>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Ave">Ave</option>
                    <option value="Caballo">Caballo</option>
                    <option value="Cerdo">Cerdo</option>
                    <option value="Conejo">Conejo</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            
            {/* ESTERILIZADO */}
            <div>
            <legend>Esterilizado</legend>
            <select value={animal.species} id="species" name="species" onChange={onChange}>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
            </select>
            </div>
            {/* GENERO */}
            <div>
            <legend>Esterilizado</legend>
            <select value={animal.genre} id="genre" name="genre" onChange={onChange}>
                <option value="Female">Hembra</option>
                <option value="Male">Macho</option>
            </select>
            </div>
             {/* EDAD */}
            <div>
            <legend>Edad</legend>
            <input
                    name="age"
                    id="age"
                    value={animal.age}
                    placeholder="Escribe la edad (en años). Si es inferior a 1 año, escribe 1"
                    onChange={onChange} />
            </div>
            {/* PESO */}
            <div>
            <legend>Peso</legend>
            <input
                    name="weight"
                    id="weight"
                    value={animal.weight}
                    placeholder="Peso en kg"
                    onChange={onChange} />
            </div>
                {/* CASA DE ACOGIDA */}
                <div>
                <legend>¿Qué necesita?</legend>
            <select value={animal.fosterhome} id="fosterhome" name="fosterhome" onChange={onChange}>
                <option value="Foster">Acogida</option>
                <option value="Adoption">Adopción</option>
            </select>
            </div>
             {/* ENFERMEDADES */}
            <div>
            <legend>Enfermedades</legend>
            <select value={animal.diseases} id="diseases" name="diseases" onChange={onChange}>
                <option value="Yes">Sí</option>
                <option value="No">No</option>
            </select>
                {animal.diseases && (<>
                    <label htmlFor="diseases_description">Descripción</label>
                    <textarea
                        name="diseases_description"
                        id="diseases_description"
                        placeholder="Nombra las enfermedades que tiene"
                        value={animal.diseases_description}
                        onChange={onChange} />
                </>)}
            </div>
               
           
            {/* DESCRIPCION */}
            <div>
                <label htmlFor="description">Descripción</label>
                <textarea
                    name="description"
                    id="description"
                    placeholder="Habla un poco sobre él. Mínimo 300 caracteres"
                    minLength="300"
                    value={animal.description}
                    onChange={onChange} />

            </div>
           
            {/* IMAGEN */}
            <div>
                <label htmlFor="image">Image</label>
                <input
                    name="image"
                    id="image"
                    type="file"
                    multiple
                    alt=""
                    onChange={onChange} />
                {/* <img src={animal.image} alt=""/> */}

            </div>




            <button type="submit">Submit</button>
        </form>

    </div>
}