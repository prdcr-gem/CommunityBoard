import React from "react";
import ClubCard from "./ClubCard";


const SchoolOrgs = () => {

    return (
        <div className= "SchoolOrgs">
            <h1> Favorite Affliated & Non-Affliated School Organizations:</h1>
            <ClubCard orgName ='WiCyS UCF' />
            <ClubCard orgName ='Hack UCF' />
            <ClubCard orgName ='CodePath' />
            <ClubCard orgName ='Design & Code Club' />
            <ClubCard orgName ='Art with Flo' />
            <ClubCard orgName ='Animation Production Club' />
            <ClubCard orgName ='Spacedad Space Club' />
            <ClubCard orgName ='Society of PC Building at UCF' />
            <ClubCard orgName ='Bsides' />
            <ClubCard orgName ='SWE UCF' />
            <ClubCard orgName ='WEEC UCF' />

            
            {/* <td>HACK UCF</td>
            <td>CodePath</td>
            <td>Design & Code Club</td>
            <td>Art with Flo</td>
            <td>Animation Production Club</td>
            <td>Spacedad's Space Club</td>
            <td>Society of PC Building at UCF</td>
            <td>Bsides</td>
            <td>SWE UCF</td>
            <td>WEEC UCF</td>
             */}

            
        </div>
    )
}

export default SchoolOrgs;