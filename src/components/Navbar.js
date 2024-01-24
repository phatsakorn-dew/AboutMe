import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
const navigate = useNavigate();
const handleToDetail = ()=>{navigate("/")};
const handleToDetail2 = ()=>{navigate("/aboutme")};
const handleToDetail3 = ()=>{navigate("/education")};
const handleToDetail4 = ()=>{navigate("/index")};
    return(
<ul>
<li><button onClick={handleToDetail}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></button></li>
<li><button onClick={handleToDetail4}>Home</button></li>
<li><button onClick={handleToDetail2}>AboutMe</button></li>
<li><button onClick={handleToDetail3}>Enducation</button></li>
<form action="#"><input id='InputText' placeholder='Search'></input><button type='submit' className='Bt' onClick={showText}><i className='fa fa-search'></i></button></form>

</ul>
    )
function showText(){
    var searchText = document.getElementById('InputText').value;
    alert('You input : ' + searchText);
}
}

export default Navbar;