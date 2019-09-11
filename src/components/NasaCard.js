import React from "react";




const NasaCard = props => {
    return(
        <div  >
        <h1>Title: {props.title}</h1>
        <img src={props.img} alt="space pic" />
        <p>{props.date}</p>
        <p>{props.explain}</p>
        </div>
    )
}
export default NasaCard;