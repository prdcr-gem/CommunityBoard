import React from "react";
import ClubCard from "./ClubCard";


const SchoolOrgs = () => {

    return (
        <div className= "school-orgs">
            <h1> Favorite Affliated & Non-Affliated School Organizations:</h1>
            <div className="club-container">
                <ClubCard orgName ="WiCyS UCF" desc="Women in Cybersecurity at UCF" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pOUUo2UevcrNrFHsXEKKMUDOzomk7dmb1vvfpFJQjJgvpkSKu_Xp8b2r6GJJjGTb0GQ&usqp=CAU" />
                <ClubCard orgName ="Hack UCF" desc="Cybersecurity focused on ethical hacking" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVi0rQpYdCUHnXoA1NsytxjxtXQ8XdFmAjQ&s"/>
                <ClubCard orgName ="CodePath" desc ="A non-profit organization helps underrespresented students" image ="https://mma.prnewswire.com/media/1800392/codepath_1x1_solid_dark_Logo.jpg?p=publish" />
                <ClubCard orgName ="Design & Code Club" desc="Where art meets code" img="src/pics/DesignCodeTriLogo-12f8a23e.png" />
                <ClubCard orgName ="Art with Flo" desc="A community where welcomes all to the world of digital art" image="https://ci3.googleusercontent.com/meips/ADKq_NablYqjKnkakgqgScmAuA0dctCRIVgNfCdAd1B10lQUaF2S4eRKrliGFS4Xe4wxUKJCLnGzkTp9L9Ct5DNU0w9_rp2Vb1TWp5AnSoEw6FkcAetjHnFPRqTcSsf58Od_SdU7S6IcUVyfqlWWEtRym_lA5pKe5R-38dPlEtHX6MrnrbMy7ncEcvGVOuskLp8DifU9ghOK5a_NVTnFwYGi2yXubA=s0-d-e1-ft#https://usercontent.flodesk.com/512b0ff7-bc05-427b-acf4-a51c7794fdae/upload/ff08e8ab-7610-41c0-bece-68aa5cf240d1.png?width=2048&height=2048" />
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