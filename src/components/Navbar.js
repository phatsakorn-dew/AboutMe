import app from "../assets/icon/app.png";
import discord from "../assets/icon/discord.png";
import gmail from "../assets/icon/gmail.png";
import facebook from "../assets/icon/facebook.png";
import profile from "../assets/icon/profile.png"

const Navbar = () => {
    return(
        <div className="flex justify-between items-center">
           <img src ={profile} width={30} alt="profile" className="cursor-pointer" />
           <ul className="hidden md:flex">
            <li className="px-2">
                <a href="https://mail.google.com/mail/u/0/"target="blank" >
                    <img src ={discord} alt="discord"width={30}/>
                </a>
            </li>

                <li className="px-2">
                <a href="https://discord.com/"target="blank">
                    <img src={gmail} alt="gmail"width={30}/>
                </a>
                </li>

                <li className="px-2">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr/"target="blank">
                        <img src={facebook} alt="facebook" width={30}/>
                    </a>
                </li>
           </ul>
        </div>
        
    )
}

export default Navbar;