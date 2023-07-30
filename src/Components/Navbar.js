import React, { useEffect, useState } from 'react'
import './Nav.css';
import ProfileScreen from './Screens/ProfileScreen';
function Navbar() {
    const [show,handleShow] = useState(false);
    //const history = useHistory()
    const transitionNavbar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar);
        return () =>
            window.removeEventListener('scroll',transitionNavbar);
        
    },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav_contents">
        <img src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" 
        alt = ""
        className='nav__logo'
        />
        <img src='https://e7.pngegg.com/pngimages/91/460/png-clipart-avatar-computer-icons-logo-grapher-logo-black.png' 
        alt=''
        onClick={()=>{<ProfileScreen/>}}
        className='nav_avatar'
        />
        </div>
        
    </div>
  )
}

export default Navbar
