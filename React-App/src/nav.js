import './nav.css';

function Navbar(){
    return(
<div >
<ul>
<li style={{float: 'left'}}><a class="active" href="#home">Home</a></li>
<li><a href="#resume">Resume</a></li>
<li><a href="./Contact.js">Contact</a></li>
<li><a href="#about">About</a></li>
</ul>
<hr />
</div>
    )
}
export default Navbar;