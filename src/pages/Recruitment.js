import TransitionBtn from "../components/TransitionBtn.js";
import "../style/Section.css";
import "../style/Recruitment.css";

import role1 from "../images/image2.png";
import role2 from "../images/image3.png";
import role3 from "../images/image10.png";
import role5 from "../images/image6.png";
import role6 from "../images/image7.png";
import role8 from "../images/image9.png";
import React from "react";

const { useState } = React;

const RoleImages = ({ role, children }) => (
  <div className="roles">{children}</div>
);

function Recruitment() {
  const [beginnerRoles] = useState([
    {
      name: "Product Manager Intern",
      logo: role1,
      description:
        "Want to be a PM but don't have enough experience? We've all been there. If you check this box on the applications, you'll get to shadow a PM and learn on the job to get the necessary experience, in addition to working on your current role. We hope to see many people from this program graduate to PM's for DevX.",
    },
    {
      name: "Developer/Design Intern",
      logo: role2,
      description:
        "Don't worry if you don't have enough technical experience, or are new to CS. We'll help you along the way and we guarantee to teach you your preferred skills while giving you the satisfying experience of contributing to your team's project.",
    },
  ]);
  const [roles] = useState([
    {
      name: "Product Manager",
      logo: role3,
      description:
        "Identify the customer need and the larger business objectives that the product will fulfill, articulate what success looks like for the product, and rally the team to turn that vision into a reality.",
    },
    {
      name: "Backend Developer",
      logo: role2,
      description:
        "Concerned with evolving a product’s business logic into robust backend services often in the form of developing APIs and designing database schema. Popular technologies include Node.js, Python, Go.",
    },
    {
      name: "Frontend Developer",
      logo: role5,
      description:
        "Defines the product presentation by working with the designer to translate prototypes into a dynamic UI and integrating APIs. Popular frameworks include React, Angular and Vue along with HTML/CSS.",
    },
    {
      name: "Mobile Developer",
      logo: role6,
      description:
        "Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.",
    },
    {
      name: "Designer",
      logo: role3,
      description:
        "Leading the visual design of the product. Teams typically have one designer who works on UI/UX wireframes often using Sketch or Figma. You will work closely with frontends to render your prototypes as well as the PM and marketing to design promotional material.",
    },
    {
      name: "Marketing",
      logo: role8,
      description:
        "Works closely with the PM and designer to establish a recognizable product brand. Expected to be resourceful and engage in user testing and demographic analysis. Finds new ways to reach and engage target audiences.",
    },
  ]);
  return (
    <div className="section">
      <div className="Recruitment" id="Recruitment">
        <div className="textWrapperLeft">
          <div data-aos="fade-in" data-aos-duration="4000"></div>
          <h1 className="title" data-aos="fade-up">
            Recruitment
          </h1>
          <p className="p1" data-aos="fade-up" data-aos-delay="100">
            At DevX, we offer both begginer friendly and experienced roles.
          </p>
          <p className="p1" data-aos="fade-up" data-aos-delay="200">
            While we offer several developer roles, DevX is not only for
            students interested in technical experience. We also offer roles for
            Product Managers, Designers and Marketers.
          </p>
          <p className="p1" data-aos="fade-up" data-aos-delay="300">
            Our recruitment for Fall of 2022 is coming up soon!
          </p>
          <h2 className="RolesTitleText"> Roles</h2>
          <div className="rolesContainer">
            {beginnerRoles.map((role, index) => (
              <RoleImages key={index} role={role}>
                <img src={role.logo} alt="logo" />
                <p className="roleText">{role.name}</p>
              </RoleImages>
            ))}
          </div>
          <div className="rolesContainer">
            {roles.map((role, index) => (
              <RoleImages key={index} role={role}>
                <img src={role.logo} alt="logo" />
                <p className="roleText">{role.name}</p>
              </RoleImages>
            ))}
          </div>
        </div>
      </div>

      <TransitionBtn navUrl="#Project" />
    </div>
  );
}
export default Recruitment;
