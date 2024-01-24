import { useNavigate } from "react-router-dom";
import app from "../assets/icon/app.png";
import Navbar from '../components/Navbar';
function Certification() {
    const navigate = useNavigate();
    const handleToDetail = ()=>{
        navigate("/index");
    };
        
    return (
        <div className="text-center">
            <Navbar />
            <p className="font-mono text-2xl font-bold uppercase">About Me</p>
            <p><center><marquee direction="left"><img src ={app} alt="app" width={100}/></marquee></center></p>
            <p className="text-md mt-2 font-blod text-white mx-36 "></p>
            <p>หน้าเพจนี้เป็นเพจไว้ทดสอบการลองผิดลองถูกในการ RunCode และ ปัจจุบันนี้ อาจจะมีอย่างอื่น</p>
            <br></br>
            <button className="text-xl text-[Gray] underline" onClick={() => handleToDetail()}>NEXT</button>
            <br></br>
            <br></br>
        </div>
        
    );
    
}

export default Certification;