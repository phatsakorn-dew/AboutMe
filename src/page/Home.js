import { useNavigate } from "react-router-dom";
import BG from '../assets/video/BG.mp4';
import './Home.css'
import '../components/TextRun';
import TextRun from '../components/TextRun';

function Home() {
const navigate = useNavigate();
const handleToDetail1= ()=>{navigate("/index")};


    return (
        <body>
        <div className="BG">
            <video autoPlay loop muted className="Bvideo">
            <source src={BG} type="video/mp4"></source>
        </video>
        </div>
        <div className="Run"><TextRun /></div>
        <div className="Home">
            <br></br>
            <br></br>
          <p className="T"> Phatsakorn </p>
            <p className="T2">( Computer Science )</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="TextL">
&emsp;&emsp;&emsp;Normally, I will :
                <div class="SwipeText">
                        <div>Play a Game .</div>
                        <div>Check Stock News .</div>
                        <div>Send a meme to a friend .</div>
                </div>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <button className="ButtonSite" onClick={() => handleToDetail1()}>Going to My Site</button><br></br> 
        </div>
        </body>
    );
}

export default Home;