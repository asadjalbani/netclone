import React, {useState, useEffect} from 'react'
import './Nav.css';

function Nav() {

    const [display, handleDisplay] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleDisplay(true);
            } else handleDisplay(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <div className={`nav ${display && "nav_black"}`}>
            

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo" 
            className="nav_logo" />

            <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
            alt="Avatar" 
            className="nav_avatar" />

        </div>
    )
}

export default Nav;