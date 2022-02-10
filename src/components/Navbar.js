import React, { useState, useContext } from 'react';
import { useGlobalContext } from './Context';
import Sublinks from './Data'

const Navbar = () => {
    
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('linkBtn')) {
            closeSubmenu();
        }
    };

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='navCenter'>
                <div className='navHeader'>
                    <img className='navLogo' src='https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg' alt='stripelogo' />
                    <button className='btn toggleBtn' onClick={openSidebar}></button>
                </div>
                <ul className='navLinks'>
                    {Sublinks.map((sublink) => {
                        return (
                            <li>
                                <button className='linkBtn' onMouseOver={displaySubmenu}>{sublink.page}</button>                              
                            </li>
                        );
                    })}
                    
                </ul>
            </div>
            <button className='btn signinBtn'>sign in</button>
        </nav>
    );
}

export default Navbar;
