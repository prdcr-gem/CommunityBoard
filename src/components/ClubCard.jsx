import React from "react";
import "./ClubCard.css";

// props is a way that passes data from one component to another component.
const ClubCard = ({orgName, image, desc, link}) => {
    return (
       <div className="club-card">
            <img src={image} alt={orgName} className="club-image" />
            <h2>{orgName}</h2>
            <p>{desc}</p>
            <button className="club-button"> Learn More </button>

            {/* _blank prompts to open the link in a new tab */}
            <a href={link} target="_blank" rel="noopener noreferrer" />
                <button className="club-button">Learn More</button>

       </div>
       
    )
}

export default ClubCard;