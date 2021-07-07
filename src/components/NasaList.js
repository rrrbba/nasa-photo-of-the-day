import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaCard from './NasaCard';
import styled from "styled-components";

const NasaPage = styled.div`
    margin: 50px;
    background: #FE2E7A;
    padding 5%;
    font-size: 1.4rem;
    color: gold;
    font-family: 'Playfair Display', serif;
`;

//to get more then one image, use &count=# to get an array of images

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
  
            <NasaPage>
            <NasaCard 
            
             title = {pictures.title} 
            

            img = {pictures.hdurl}
            date = {pictures.date}
            explain = {pictures.explanation}
            />
            </NasaPage>

    )
 }

