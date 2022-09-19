import React from "react";
import ReactDOM from "react-dom";
import data from "../public/data";


export default function Card(props) {
    return (
        <div className="cardJournal">
            <img src={`../public/images/${props.img}`} className='card-image' />
            <div className="cardDetails">
                <p>{props.title}</p>
                <span>{props.location}</span>
                <span>{props.description}</span>
            </div>
           
        </div>
    )
}
