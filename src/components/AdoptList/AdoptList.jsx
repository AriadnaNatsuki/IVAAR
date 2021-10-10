import React, { useEffect, useState } from "react"
import { listAdoptions } from '../../services/AnimalService'
import AnimalCard from "../AnimalCard/AnimalCard";
export default function AdoptList() {
    //Hooks
    const [animals, setAnimals] = useState();
    const [error, setError] = useState(false);
    useEffect(() => {
        listAdoptions()
            .then((animals) => {
                setAnimals(animals)
            console.log(animals)
        }).catch(()=>{
          setError(true)
        })
 },[])
 if(error){
     return <h2>There was an error</h2>
    }
    //Si no hay error y no hay animales
    if(!animals){
        return <h2>Loading...</h2>
    }
        return (
            <section id="AdoptList"className="AdoptList">
            <h1>Adopt an animal!</h1>
           {animals.map((animal)=> <AnimalCard key={animal._id} {...animal}/>)}
            </section>
        )
    
        
    
}