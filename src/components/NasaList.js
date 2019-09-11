import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaCard from './NasaCard';

export default function NasaList() {
    
    const [pictures, setPictures] = useState("");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=5jJL9iCQWtNagUoFPl5j67UsCWafzEbueySFNpC1`)
            .then(response => {
                const pictures = response.data;
                console.log(response);
                setPictures(pictures);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            })
},[]);
    return (
        <div>
            
            <NasaCard 
           
            title = {pictures.title}
            img = {pictures.hdurl}
            date = {pictures.date}
            explain = {pictures.explanation}
            />
     </div>
    )
 }

