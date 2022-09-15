import React, { Component } from "react";
import {motion} from "framer-motion";
import { collection, getFirestore, doc, setDoc } from "firebase/firestore";
import TransitionUpBtn from "../components/TransitionUpBtn.js";
import app from "../firebase.js";
import "../style/Contact.css";
import "../style/App.css";
import "../style/Section.css";
const $ = (element) => document.getElementById(element);


const db = getFirestore(app);
const messages = collection(db, "messages");

class Contact extends Component {
  componentDidMount() {
    var inputWrappers = document.getElementsByClassName("inputBox");
    for (let i = 0; i < inputWrappers.length; i++) {
      inputWrappers[i].style.setProperty(
        "--animate-duration",
        0.2 * i + 0.5 + "s"
      );
    }
    var submitWrapper = document.getElementsByClassName("submitWrapper");
    submitWrapper[0].style.setProperty("--animate-duration", 1.5 + "s");
    document.getElementById("goBackBtn").addEventListener("click", () => {
      window.location.href = "/";
    });
    console.log(messages);
  }
  render() {
    return (
      <div className="section">
        <div className="contactWrapper">
          <div className="contactInner">
            <form className="contactForm">
              <h1 className="">Contact Us</h1>
              <div className="inputBox animate__animated animate__backInUp">
                <input type="text" id="contactName" required></input>
                <span>Name</span>
              </div>
              <div className="inputBox animate__animated animate__backInUp">
                <input type="text" id="contactEmail" required></input>
                <span>Email</span>
              </div>
              <div className="inputBox animate__animated animate__backInUp">
                <textarea id="contactMessage" required></textarea>
                <span>Message</span>
              </div>
              <div className="submitWrapper animate__animated animate__backInUp ">
                <div
                  className="submitBtn"
                  id="submitBtn"
                  onClick={async () => {
                    let name = $("contactName").value;
                    let email = $("contactEmail").value;
                    let message = $("contactMessage").value;
                    try {
                      await setDoc(doc(messages), {
                        name: name,
                        email: email,
                        message: message,
                      });

                      setTimeout(() => {
                        window.location.href = "/";
                      }, 0);
                    } catch {
                      alert("Failed sending data!");
                    }
                  }}
                >
                  Submit
                </div>
                <div className="submitBtn" id="goBackBtn">
                  Go Back
                </div>
              </div>
              <div className="transitionUpBtn">
                <TransitionUpBtn navUrl="/#" />
              </div>
            </form>
          </div>
        </div>
        <motion.div initial={{y:250}} animate={{y:-10}} transition={{delay: 0.5, type:"spring", stiffness:150}}>
          <p className="credits">Created by DevX Intern Class of 2026!</p>
        </motion.div>
      </div>
    );
  }
}

export default Contact;
