import React from "react";
import ReactDOM from "react-dom";
import data from "../public/data";

export default function Card(props) {
  return (
    <div className="cardJournal">
      <img src={`../images/${props.img}`} className="card-image" />
      <div className="cardDetails">
        <h2>{props.title}</h2>
        <h4>
          {props.location}
        </h4>
        <p className="cardDescription">
          <span>{props.description}</span>
        </p>
      </div>
    </div>
  );
}
