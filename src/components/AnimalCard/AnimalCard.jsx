// import React from "react"
import { Link } from "react-router-dom"

export default function AnimalCard({ name, genre, age, diseases, weight, images, id }) {
    return (<Link className="AnimalCard" to={`/adopt/${id}`}>
        <img className="AnimalCard_image" src={images[0]} alt=""/>
        <div className="AnimalCard_basic-info">
            <ul>
                <li>{genre}</li>
                <li>{age} año/s</li>
                <li>{weight} kg</li>
                if(diseases.length!=0){
                    {diseases}.forEach(disease=><li>disease</li>)
                }
            </ul>
        </div>
        
    </Link>)
}