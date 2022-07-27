import React from 'react';
import "./Style.css";


function NavBar() {
    return (
        <div className='NavBar'>
            <div className='HomeButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                }}>Home</button>
            </div>

            <div className='AboutButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/About';
                }}>About</button>
            </div>

            <div className='RecruitmentButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/Recruitment';
                }}>Recruitment</button>
            </div>

            <div className='ProjectsButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'http://google.com';
                }}>Projects</button>
            </div>

            <div className='ContactsButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'http://google.com';
                }}>Contacts</button>
            </div>

        </div>
    );

}


export default NavBar;


