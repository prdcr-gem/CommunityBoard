import React from "react";
import SchoolOrgs from "./SchoolOrgs";

// props is a way that passes data from one component to another component.
const ClubCard = (props) => {
    return (
       <td>{props.orgName}</td>
    )
}

export default ClubCard;