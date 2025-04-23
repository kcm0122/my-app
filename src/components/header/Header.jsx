import React, { useState } from 'react';
  import CloseIcon from "@mui/icons-material/Close"
  import MenuIcon from "@mui/icons-material/Menu"
import { HashLink  as Link} from 'react-router-hash-link';

function Header() {
    const [sidebar, setSiderBar] = useState(false);

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        header.classList.toggle("active", this.window.scrollY > 20);
    });

    return (
        <>
            <header className='header'>
                <div className='container flex'>
                    <div className='nav'>
                        <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSiderBar(false)}>
                            <li><Link smooth to='/#home'>Home</Link></li>
                            <li><Link smooth to='/#about'>About Me</Link></li>
                            <li><Link smooth to='/#skill'>Skill</Link></li>
                            <li><Link smooth to='/#project'>Project</Link></li>
                        </ul>
                        <button className='navbar-items-icon' onClick={() => setSiderBar(!sidebar)}>{sidebar ? <CloseIcon /> : <MenuIcon />}</button>
                    </div>
                </div>
            </header>
        </>
    )}

export default Header;