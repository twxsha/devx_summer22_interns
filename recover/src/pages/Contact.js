import React, { Component } from 'react';
import '../style/Contact.css'
import '../style/App.css'
import '../style/Section.css'

class Contact extends Component {
    submitMessage=()=>{

    }

     
    componentDidMount(){
        var inputWrappers = document.getElementsByClassName("inputBox");
        for(let i=0; i<inputWrappers.length; i++){
            inputWrappers[i].style.setProperty('--animate-duration', 0.2*i+0.5+'s');
        }
        var submitWrapper = document.getElementsByClassName("submitWrapper");
        submitWrapper[0].style.setProperty('--animate-duration', 1.5+'s');
        document.getElementById("goBackBtn").addEventListener("click", ()=>{
            window.location.href="/";
        })

    }
    render() {
        return (
            <div className='contactWrapper'>
                <div className='contactInner'>
                    <form className='contactForm'>
                        <h1 className=''>Contact Us</h1>
                        <div className='inputBox animate__animated animate__backInUp'>                        
                            <input type="text" required></input>
                            <span>Name</span>
                        </div>
                        <div className='inputBox animate__animated animate__backInUp'>                        
                            <input type="text" required></input>
                            <span>Email</span>
                        </div>
                        <div className='inputBox animate__animated animate__backInUp'>                        
                            <textarea required></textarea>
                            <span>Message</span>
                        </div>
                        <div className='submitWrapper animate__animated animate__backInUp ' > 
                            <div className='submitBtn' id="submitBtn"> 
                                Submit
                            </div>
                            <div className='submitBtn' id="goBackBtn"> 
                                Go Back
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Contact;
