import React from "react";
import ClubCard from "./ClubCard";


const SchoolOrgs = () => {

    return (
        <div className= "school-orgs">
            <h1> Favorite Affliated & Non-Affliated School Organizations:</h1>
            <div className="club-container">
                <ClubCard orgName ="WiCyS UCF" desc="Women in Cybersecurity at UCF" image="" />
                <ClubCard orgName ="Hack UCF" desc="Cybersecurity focused on ethical hacking" image=""/>
                <ClubCard orgName ="CodePath" desc ="A non-profit organization helps underrespresented students" image ="" />
                <ClubCard orgName ="Design & Code Club" desc="Where art meets code" img="" />
                <ClubCard orgName ="Art with Flo" desc="A community where welcomes all to the world of digital art" image="" />
                <ClubCard orgName ="Animation Production Club " desc="An animation community at UCF" img="" />
                <ClubCard orgName ="Spacedad Space Club" desc="A global animation community focuses on leveraging and enhancing your animation skills" image=""/>
                <ClubCard orgName ="Society of PC Building at UCF" desc="An indepth club course for PC Building at UCF" img=""/>
                <ClubCard orgName ="Bsides" desc="An affliated cybersecurity community" img ="" />
                <ClubCard orgName ="SWE UCF" desc="Society of Women Engineers at UCF" img="" />
                <ClubCard orgName ="WEEC UCF" desc="Women in Electrical Engineers and Computer Science at UCF" img="" />
            </div>
            


            {/* <td>HACK UCF</td>
            <td>CodePath</td>
            <td>Design & Code Club</td>
            <td>Art with Flo</td>
            <td>Animation Production Club</td>
            <td>Spacedad"s Space Club</td>
            <td>Society of PC Building at UCF</td>
            <td>Bsides</td>
            <td>SWE UCF</td>
            <td>WEEC UCF</td>
             */}

            
        </div>
    )
}

export default SchoolOrgs;