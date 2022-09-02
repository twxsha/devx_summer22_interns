import NavBar from "../NavBar";
import "../MeetTeam.css";

import ellipse from "../images/ellipse.png";

import member1 from "../images/member1.jpeg";
import member2 from "../images/member1.jpeg";
import member3 from "../images/member1.jpeg";
import member4 from "../images/member1.jpeg";
import member5 from "../images/member1.jpeg";
import member6 from "../images/member1.jpeg";
import member7 from "../images/member1.jpeg";
import member8 from "../images/member1.jpeg";

import React from "react";
const { useState } = React;
const MemberImages = ({ member, children}) => (
  <div className="members">{children}</div>
);

function MeetTeam(){
  const [member] = useState([
    {
      name: "NAME",
      image: member1,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member2,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member3,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member4,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member5,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member6,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member7,
      role: "role",
      link: ""
    },
    {
      name: "NAME",
      image: member8,
      role: "role",
      link: ""
    }
  ])

    return(
        <div className="Team">
            <NavBar></NavBar>
            <div className="title">
              <p> Meet our Team</p>
            </div>

          <div className="memberContainer">
            {member.map((member, index) => (
              <MemberImages key={index} member={member}>
                <a href={member.link} target="_blank" div className="mem">                  
                    <div className="memEllipse"><img src={ellipse} alt=""></img></div>
                    <div className="memberImage"><img src={member.image} alt=""/></div>
                    <div className="memName"><p>{member.name}</p></div>
                    <div className="memRole"><p>{member.role}</p></div>
                </a>
              </MemberImages>
            ))}
          </div>
        </div>
    );
}

export default MeetTeam;