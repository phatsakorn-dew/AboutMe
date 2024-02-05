import { useNavigate } from "react-router-dom";
import app from "../assets/icon/app.png";
import Navbar from '../components/Navbar';
import './Index.css'

function Index() {
const navigate = useNavigate();
const handleToDetail = ()=>{navigate("/")};
const handleToDetail2 = ()=>{navigate("/aboutme")};
const handleToDetail3 = ()=>{navigate("/contact")};


    return (
        <div className="Index">
            <Navbar />
            <br></br>
            <div className="Txt">
            <p><center><marquee>Welcom To About_Me Site</marquee></center></p>
            </div>
            <p><center><img src ={app} alt="app" width={100}/></center></p>
            <p><center>This website was created. From some of my resume information.</center></p>
            <br></br>
            <p><center>ฺThis is Space-Rocket-Night-Cartoon.</center></p>
            <div className="CardIMG">
                <img src="https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_1280.jpg"></img>
            </div>
            <br></br>
        
        </div>
        
    );
}

export default Index;
