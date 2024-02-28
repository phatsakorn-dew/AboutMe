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
            <p><center>ฺThis is Shipping Project(Team Group).</center></p>
            <div className="CardIMG">
            <br></br>
            <center><a href="https://www.figma.com/file/Zx4V6dCnStzTeJ4hKath34/Shipping-Mobile?type=design&node-id=136%3A35&mode=design&t=DdOMedNwXCkgLEwc-1">Link : Shipping Project (Figma)</a></center>
                <img src="https://cdn.discordapp.com/attachments/1180569234594611200/1212243802342035496/image.png?ex=65f12104&is=65deac04&hm=915e608e9bc70dfd80bf327c688ac2cb96cec1962aef611a2cb3cd8dcaa98803&"></img>
            <br></br>
            </div>
            <br></br>
        </div>
        
    );
}

export default Index;
