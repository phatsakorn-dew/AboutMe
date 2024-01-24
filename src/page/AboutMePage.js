import { useNavigate } from "react-router-dom";
import Profile from "../assets/icon/Profile.jpg";
import Navbar from '../components/Navbar';
import './AboutMePage.css';
function AboutMePage() {
    const navigate = useNavigate();
    const handleToDetail = ()=>{
        navigate("/");
    };
        
    return (
        <body>
        <div className="text-center">
            <Navbar />
            <p className="A_Me">About Me</p>
            <p><center><img src ={Profile} alt="icon" width={100}/></center></p>

            <div className="Card1">
                
                <p>&nbsp;&nbsp;<i class="fa fa-user" aria-hidden="true"></i> Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Phatsakorn</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 21</p>
                <p>&nbsp;&nbsp;<i class="fa fa-envelope" aria-hidden="true"></i> Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Phatsakorn.me@ku.th</p>
                <p>&nbsp;&nbsp;<i class="fa fa-globe" aria-hidden="true"></i> Location : Mueang ChonBuri District <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chonburi,20000</p>
            </div>
            <br></br>
            <div className="Card2">
                <h3>&nbsp;&nbsp;Hard Skills</h3>
                <h1>&nbsp;&nbsp;&nbsp;Programming Languages</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Dart , C, C++, React , Javascript ,CSS, C#, Java</p>
                <h1>&nbsp;&nbsp;&nbsp;Computer Program</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Visual Studio Code ,Visual Studio 2022, Android Studio , Apache NetBeans,</p>
                <h1>&nbsp;&nbsp;&nbsp;Design</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;figma</p>
                <h1>&nbsp;&nbsp;&nbsp;Video Tool</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;vegas movie studio 17 steam Edition</p>
            </div>
            <br></br>
            <div className="Card3">
                <h3>&nbsp;&nbsp;Job Objective</h3>
                <p>&nbsp;&nbsp;&nbsp;to obtain employment in the field of web developement and mobile development</p>
                <p>&nbsp;&nbsp;&nbsp;because I am interested in working in the fields of front-end development,</p>
                <p>&nbsp;&nbsp;&nbsp;web development, full-stack development, and mobile development.</p>
            </div>
            <div className="Card4">
                <br></br>
                <p></p>
            </div>
        </div>
        </body>
    );
    
}

export default AboutMePage;