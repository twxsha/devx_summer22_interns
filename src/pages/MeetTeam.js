import "../style/MeetTeam.css";

import ellipse from "../images/ellipse.png";

import member1 from "../images/board/isha.png";
import member2 from "../images/board/medha.jpeg";
import member3 from "../images/board/brandon.jpeg";
import member4 from "../images/board/justin.jpeg";
import member5 from "../images/board/twisha.jpeg";
import member6 from "../images/board/ribhav.jpg";
import member7 from "../images/board/trisha.png";

import React from "react";
const { useState } = React;
const MemberImages = ({ member, children }) => (
  <div className="members">{children}</div>
);

function MeetTeam() {
  const [member] = useState([
    {
      name: "Isha Rajput",
      image: member1,
      role: "Advisor",
      link: "https://www.linkedin.com/in/isharajput",
    },
    {
      name: "Medha Kini",
      image: member2,
      role: "Advisor",
      link: "https://www.linkedin.com/in/medha-kini/",
    },
    {
      name: "Brandon Pan",
      image: member3,
      role: "Co-President",
      link: "https://www.linkedin.com/in/brandonppan/",
    },
    {
      name: "Justin Quan",
      image: member4,
      role: "Co-President",
      link: "",
    },
    {
      name: "Twisha Sundararajan",
      image: member5,
      role: "Vice President",
      link: "https://www.linkedin.com/in/twishasundararajan/",
    },
    {
      name: "Ribhav Mittal",
      image: member6,
      role: "Finance Director",
      link: "https://www.linkedin.com/in/ribhavmittal",
    },
    {
      name: "Trisha Patel",
      image: member7,
      role: "Design Director",
      link: "",
    },
    // {
    //   name: "NAME",
    //   image: member8,
    //   role: "role",
    //   link: ""
    // }
  ]);

  return (
    <div className="section">
      <div className="team" id="Contact">
        <div data-aos="fade-in" data-aos-duration="4000"></div>
        <h1 className="title" data-aos="fade-down" data-aos-delay="0">
          Meet our Team
        </h1>
        <div className="memberContainer">
          {member.map((member, index) => (
            <MemberImages key={index} member={member} className="member">
              <a href={member.link} target="_blank" div className="mem">
                <div className="memEllipse">
                  <img src={ellipse} alt=""></img>
                </div>
                <div className="memberImage">
                  <img src={member.image} alt="" />
                </div>
                <div className="memName">
                  <p>{member.name}</p>
                </div>
                <div className="memRole">
                  <p>{member.role}</p>
                </div>
              </a>
            </MemberImages>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;
