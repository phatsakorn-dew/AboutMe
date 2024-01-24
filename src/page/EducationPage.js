import { useNavigate } from "react-router-dom";
import app from "../assets/icon/app.png";
import Navbar from '../components/Navbar';
import './EducationPage.css'
function EducationPage() {
    const navigate = useNavigate();
    const handleToDetail = ()=>{
        navigate("/index");
    };
        
    return (
        <div className="text-center">
            <Navbar />
            <p className="A_Me">Education</p>
            <div className="CardIMG">
                <img src="https://www.src.ku.ac.th/th/tp/img/src-5.jpg"></img>
            </div>
            <br></br>
            <p>Kasetsart University Sriracha<br></br>(computer science group)<br></br>2021 - Present</p>
            <br></br>
        </div>
        
    );
    
}

export default EducationPage;