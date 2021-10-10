import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimal } from '../../services/AnimalService'
import GoBack from '../goBack/GoBack'


export default function AnimalItem() {
    
        const [animal, setAnimal] = useState();
        const [error, setError] = useState(false);
        const {id}=useParams();
    
        useEffect(()=>{
            getAnimal(id)
                .then((animal) => setAnimal(animal))
                .catch(() =>setError(true))
        }, [id])
    
    if (error) {
        return <h2>There was an error</h2>
    }
    if (!animal) {
        return <h2>There is no animal info</h2>
    }
    return <div className="AnimalItem">
        <GoBack />
        <h2>{animal.name}</h2>
        {animal.genre}
        {animal.age} año/s
        {animal.weight} kg
        {/* if({animal.diseases}.length!=0){
        {animal.diseases}.forEach(disease => <li>disease</li>)
        } */}
        {animal.description}
    </div>
}