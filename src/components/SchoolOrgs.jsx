import React from "react";
import ClubCard from "./ClubCard";
import designCodeLogo from "/Users/grandmastahb/Documents/SPRING2025/WEB102/CommunityBoard/src/pics/DesignCodeTriLogo-12f8a23e.png";


const SchoolOrgs = () => {

    return (
        <div className= "school-orgs">
            <h1> Favorite Affliated & Non-Affliated School Organizations:</h1>
            <div className="club-container">
                <ClubCard orgName ="WiCyS UCF" desc="Women in Cybersecurity at UCF" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pOUUo2UevcrNrFHsXEKKMUDOzomk7dmb1vvfpFJQjJgvpkSKu_Xp8b2r6GJJjGTb0GQ&usqp=CAU" />
                <ClubCard orgName ="Hack UCF" desc="Cybersecurity focused on ethical hacking" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVi0rQpYdCUHnXoA1NsytxjxtXQ8XdFmAjQ&s"/>
                <ClubCard orgName ="CodePath" desc ="A non-profit organization helps underrespresented students" image ="https://mma.prnewswire.com/media/1800392/codepath_1x1_solid_dark_Logo.jpg?p=publish" />
                <ClubCard orgName ="Design & Code Club" desc="Where art meets code" img={designCodeLogo} />
                <ClubCard orgName ="Art with Flo" desc="A community where welcomes all to the world of digital art" image="https://ci3.googleusercontent.com/meips/ADKq_NablYqjKnkakgqgScmAuA0dctCRIVgNfCdAd1B10lQUaF2S4eRKrliGFS4Xe4wxUKJCLnGzkTp9L9Ct5DNU0w9_rp2Vb1TWp5AnSoEw6FkcAetjHnFPRqTcSsf58Od_SdU7S6IcUVyfqlWWEtRym_lA5pKe5R-38dPlEtHX6MrnrbMy7ncEcvGVOuskLp8DifU9ghOK5a_NVTnFwYGi2yXubA=s0-d-e1-ft#https://usercontent.flodesk.com/512b0ff7-bc05-427b-acf4-a51c7794fdae/upload/ff08e8ab-7610-41c0-bece-68aa5cf240d1.png?width=2048&height=2048" />
                <ClubCard orgName ="Animation Production Club " desc="An animation community at UCF" img="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/455828922_1852407755240659_2846317687112621865_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2AFJexNdan-56D11xoIDTXDZtNs5Yr7p41Nv1wHKBWYj4yn_BqwHnESBtJv4Us__uEk&_nc_ohc=CWBPF6vWNZkQ7kNvgHpTctj&_nc_gid=bdce749ec4094ad0bc17811d39af6a8f&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYCCxUubODGH1VHpB92sMDlmwVXnHX6JkFngcFKgE3br6A&oe=67CA0ADA&_nc_sid=8b3546" />
                <ClubCard orgName ="Spacedad Space Club" desc="A global animation community focuses on leveraging and enhancing your animation skills" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQCQ5kOpB3p_JwVWHd-UyfikKW5f8vnW5IA&s"/>
                <ClubCard orgName ="Society of PC Building at UCF" desc="An indepth club course for PC Building at UCF" img="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/290981614_311086871236091_9071232539357257479_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2AG5jdjnfhdeRazE9rnJYMl6Udryi5Hd59JMDeAUbDGBMj3nePs2LIyPx9vBp08RsTU&_nc_ohc=iei5bTho_I0Q7kNvgHSLbWm&_nc_gid=7965f0b492294bac8bc00218c853d37b&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBKBByi-EkPDLPEDQuUMXatjW0hQcczo6pW4MvsMBJnkg&oe=67CA0946&_nc_sid=8b3546"/>
                <ClubCard orgName ="Bsides" desc="An affliated cybersecurity community" img ="https://bsidesorlando.org/assets/images/logo-b.png" />
                <ClubCard orgName ="SWE UCF" desc="Society of Women Engineers at UCF" img="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/459193911_6483800351744354_5495910983839589693_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2AHWW9yuUCGDprXmgPAAvy39QMm3kxccUmvgm7S_YI8Xg3lb6j_PRHT3N6ExlPj70x4&_nc_ohc=fnUhrkdnbOgQ7kNvgERdTFc&_nc_gid=09442317c46f4f898f2aa8067b3ede1e&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYB3ZhLNfgsprohfCqnNKz6DCj0EXqTDQLC_rFtKmmdJIA&oe=67C9ED82&_nc_sid=8b3546" />
                <ClubCard orgName ="WEEC UCF" desc="Women in Electrical Engineers and Computer Science at UCF" img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAt1BMVEVHcEwzDiEiDhggEBgdEhcaDhYcERg4DSM6DSRUDi8eERlMDCplFD0kDBlfEDZhEDclEBoaDxdUCy9cEDU+CSJKDCpmLkwyDR/cfLmRSHFQGzcIBAUoEh4VChK4prSkkJysYZBlO1ZqRV6eg5SHQWc8ITDHtsVwVGt8WHliIUR5NlklAxXRyc51SWVxK0+Ie4OsnKaQiYxVJD9UNEabYILo2uSrRH14cHOOY4H3+fdlZ2Xenb/KcqocUXkfAAAAEXRSTlMAR3rC/t30NB3R1u37WHK8nuQap6cAAAH2SURBVCiRZZOJdqowEIajIohie4IkIYBB9n0V3Nr3f6472FZt7885k2G+M5OQGRD60ertXdU09f1NQX81U3cPqbNfaKXqTwauunoyZaP/0eZRW9F1ousZ3eVhmGs0m17JN11tCMk+9JwPgesGA8/1jx0hm6/KKiFWXvPBLZu2a8p2COucEKLezwlOX4dBd2uFEG18c4Ow7gkxtlOiYVg0DM63OPAprdz43LghtQxjAzsaIK3pOuFT7lFOfVG6F22KKmjOYAm7W1zldRYEWU0jyA0hyOZowRjbpdcy1aq6qpKqNqy0vKY7CC/QmrGiCUTrwmeIPBdu0LmucJuCOWskO44dd7E4t1XQHvIk8cvx2MTCdhwZyZJkl2XBujYpI37qmutYnv1rbEuSjNYAxehd4tarxuNxTHoRe/7Y2hJeogXGtudXlX9M09TzwCQ+1Pb2GC/QHEt43/MTj47+MUnBQHFuAcNzpIDdZxfT5BHtk6SnETfNSz9BaMwaY4l5B9M8RJZt99Hk0cjBsCVcPMaOdafmYRjuC2UWwOnip1SHMso/Te55g/nJaVEDW381W8Z7diqgNQcQNKQ4FXssf4/RdCbLiQpiZZlFisixIPCYwBnkTs/etu27g+WX6Vwt8S8tX0YTtH3By+1/M6/MF0tJWi7mz9/hH6mMRep+2W9zAAAAAElFTkSuQmCC" />
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