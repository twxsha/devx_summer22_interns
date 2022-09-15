import React from 'react';
import TransitionBtn from "../components/TransitionBtn.js";
import "../style/About.css";

function About() {
  return (
    <div className="section">
      <div className="About" id="About">
        <div className="textWrapperLeft">
          <div data-aos="fade-in" data-aos-duration="4000"></div>
          <h1 className="title" data-aos="fade-down" data-aos-delay="0">
            ABOUT
          </h1>
          <p className="p1" data-aos="fade-down" data-aos-delay="150">
            DevX is a student organization dedicated to providing UCLA students
            with the opportunity to create practical applications.
          </p>
          <p className="p1" data-aos="fade-down" data-aos-delay="300">
            We comprise of several project teams building out real-world
            projects to help tackle pressing problems frustrating the UCLA
            community and beyond. We welcome people of all backgrounds
            including engineering, technology, management, marketing, design
            and much more. Make your ideas come to life, grow your technical
            skills by pairing up with experienced students, and build a network
            that lasts beyond graduation.
          </p>
        </div>
      </div>
      <TransitionBtn navUrl="#Recruitment" />
    </div>
  );
}
export default About;
