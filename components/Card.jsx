import React from "react";
import ReactDOM from "react-dom";
import data from "../public/data";

export default function Card(props) {
  return (
    <div className="cardJournal">
      <img src={`../images/${props.image}`} className="card-image" />
      <div className="cardDetails">
        <h2>{props.title}</h2>
        <span>{props.location}</span>
        <p className="cardDescription">
          <span>{props.description}</span>
        </p>
      </div>
    </div>
  );
}
