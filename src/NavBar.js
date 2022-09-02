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
                    window.location.href = '/Project';
                }}>Projects</button>
            </div>

            <div className='ContactsButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/Contact';
                }}>Contacts</button>
            </div>
            
            <div className='MeetTeamButton'>
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/MeetTeam';
                }}>Meet the Team</button>
            </div>



        </div>
    );

}


export default NavBar;


