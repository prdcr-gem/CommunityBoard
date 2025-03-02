import React from "react";
import "./ClubCard.css";

// props is a way that passes data from one component to another component.
const ClubCard = ({orgName, image, desc}) => {
    return (
       <div className="club-card">
            <img src={image} alt={orgName} className="club-image" />
            <h2>{orgName}</h2>
            <p>{desc}</p>
            <button className="club-button"> Learn More </button>

       </div>
       
    )
}

export default ClubCard;