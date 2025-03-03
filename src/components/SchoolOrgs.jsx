import React from "react";
import ClubCard from "./ClubCard";



const SchoolOrgs = () => {

    return (
        <div className= "school-orgs">
            <h1> Top Favorite School-Affliated and Non-School Affliated Organizations</h1>
            <h2> Incorporating Art, Coding, and Cybersecurity</h2>
            <div className="club-container">
                <ClubCard orgName ="WiCyS UCF" 
                          desc="Women in Cybersecurity at UCF"
                          image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pOUUo2UevcrNrFHsXEKKMUDOzomk7dmb1vvfpFJQjJgvpkSKu_Xp8b2r6GJJjGTb0GQ&usqp=CAU"
                          link ="https://hackucf.org/wicys" />
                <ClubCard orgName ="Hack UCF" 
                          desc="Cybersecurity focused on ethical hacking" 
                          image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVi0rQpYdCUHnXoA1NsytxjxtXQ8XdFmAjQ&s"
                          link ="https://hackucf.org/" />
                <ClubCard orgName ="CodePath" 
                          desc ="A non-profit organization helps underrepresented students" 
                          image ="https://mma.prnewswire.com/media/1800392/codepath_1x1_solid_dark_Logo.jpg?p=publish" 
                          link ="https://www.codepath.org/"/>
                <ClubCard orgName ="Design & Code Club" 
                          desc="Where art meets code" 
                          image="https://designandcodeucf.com/assets/DesignCodeTriLogo-12f8a23e.png" 
                          link ="https://designandcodeucf.com/"/>
                <ClubCard orgName ="Art with Flo" 
                          desc="A community where welcomes all to the world of digital art" 
                          image ="https://ci3.googleusercontent.com/meips/ADKq_NablYqjKnkakgqgScmAuA0dctCRIVgNfCdAd1B10lQUaF2S4eRKrliGFS4Xe4wxUKJCLnGzkTp9L9Ct5DNU0w9_rp2Vb1TWp5AnSoEw6FkcAetjHnFPRqTcSsf58Od_SdU7S6IcUVyfqlWWEtRym_lA5pKe5R-38dPlEtHX6MrnrbMy7ncEcvGVOuskLp8DifU9ghOK5a_NVTnFwYGi2yXubA=s0-d-e1-ft#https://usercontent.flodesk.com/512b0ff7-bc05-427b-acf4-a51c7794fdae/upload/ff08e8ab-7610-41c0-bece-68aa5cf240d1.png?width=2048&height=2048" 
                          link = "https://artwithflo.com/"/>
                <ClubCard orgName ="Animation Production Club " 
                          desc="An animation community at UCF" 
                          image ="https://se-images.campuslabs.com/clink/images/9c4bd7d2-df9e-4de6-8dd6-dc3613a8f1a6c20e5ec9-feaa-4d6b-9a76-38fd478b5915.png?preset=med-sq" 
                          link = "https://linktr.ee/apc.ucf"/>
                <ClubCard orgName ="Spacedad's Space Club" 
                          desc="A global animation community focuses on leveraging and enhancing your animation skills" 
                          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQCQ5kOpB3p_JwVWHd-UyfikKW5f8vnW5IA&s"
                          link="https://m.twitch.tv/iamspacedad/about"/>
                <ClubCard orgName ="Society of PC Building at UCF" 
                          desc="An indepth club course for PC Building at UCF" 
                          image ="https://se-images.campuslabs.com/clink/images/99c0f67b-b28c-4237-a943-90078d7f4ee46634f305-21e7-4aa4-bc5b-1b937dc452a6.PNG?preset=med-sq"
                          link ="https://linktr.ee/spcbatucf"/>
                <ClubCard orgName ="Bsides" 
                          desc="An affliated cybersecurity community" 
                          image ="https://bsidesorlando.org/assets/images/logo-b.png"
                          link ="https://bsidesorlando.org/" />
                <ClubCard orgName ="SWE UCF" 
                          desc="Society of Women Engineers at UCF" 
                          image ="https://se-images.campuslabs.com/clink/images/27c36c54-29e2-4107-836c-aba6355c0588615f270d-644d-4d2c-9135-89fc3cda6725.png?preset=med-sq" 
                          link ="https://www.instagram.com/swe.ucf/?hl=en"/>
                <ClubCard orgName ="WEECS UCF" 
                          desc="Women in Electrical Engineers and Computer Science at UCF" 
                          image ="https://se-images.campuslabs.com/clink/images/62c4513a-992f-481b-bec2-394ea76b6f11cabcbce2-f5e0-44f8-8fa9-e796ad78db60.jpg?preset=med-sq"
                          link ="https://www.instagram.com/weecsucf/" />
            </div>
            {/* end of club-container */}

            <div className ="footer">
                <p>&copy; 2025 Geraldine Bongato. All rights reserved.</p>

            </div>
            {/* end of footer */}


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
        // end of school-orgs
        
    )
}

export default SchoolOrgs;