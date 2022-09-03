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

const AppLinks = ({ apps, children }) => <div className="">{children}</div>;

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

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
  const [ApplicationLinks] = useState([
    {
      name: "Developer Application",
      link: "https://www.google.com/",
    },
    {
      name: "PM Application",
      link: "https://www.google.com/",
    },
    {
      name: "Design Application",
      link: "https://www.google.com/",
    },
    {
      name: "Marketing Application",
      link: "https://www.google.com/",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
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
          <h2 className="SubTitleText"> Roles</h2>
          <p className="roleType">Beginner Roles</p>
          <div className="rolesContainer">
            {beginnerRoles.map((role, index) => (
              <RoleImages key={index} role={role} className="roleImage">
                <img src={role.logo} className="motion" alt="logo" />
                <p className="roleText">{role.name}</p>
              </RoleImages>
            ))}
          </div>
          <p className="roleType">Experienced Roles</p>
          <div className="rolesContainer">
            {roles.map((role, index) => (
              <RoleImages key={index} role={role} className="roleImage">
                <img src={role.logo} alt="logo" className="motion" />
                <p className="roleText">{role.name}</p>
              </RoleImages>
            ))}
          </div>
          <h2 className="SubTitleText"> Application Process</h2>
          <div className="applicationContainer">
            <div className="info">
              <div className="step">
                <p>1. Submit Application</p>
              </div>
              <div className="descrip">
                <p>
                  Tell us about your interests an how you think you can
                  contribute to Devx. We will be looking at your resume and
                  portfolio (if applicable).
                </p>
              </div>
              <div className="step">
                <p>2. Demo Day</p>
              </div>
              <div className="descrip">
                <p>
                  If you pass the initial screening, you will be invited to our
                  Demo Day in which all teams looking to recruit will present
                  their projects. You can then express interest in your top
                  teams.
                </p>
              </div>
              <div className="step">
                <p>3. Team Interviews</p>
              </div>
              <div className="descrip">
                <p>
                  If these teams are interested in you as well, they will reach
                  out to you for an interview.
                </p>
              </div>
              <div className="step">
                <p>4. Final Decision</p>
              </div>
              <div className="descrip">
                <p>
                  If all goes well, PMs will send out an email formally inviting
                  you to the team. Welcome!
                </p>
              </div>
            </div>
            <div className="links">
              {ApplicationLinks.map((apps, index) => (
                <AppLinks key={index} apps={apps} className="roleImage">
                  {/* In order to enable links, put links into ApplicationLinks array up above, uncomment href section below and comment out "Onclick={togglePopup} in the same line" */}
                  <a class="applicationButton" /*href={apps.link}*/ onClick={togglePopup}>
                    {isOpen && <Popup
                      content={<>
                        <b>Applications are not out yet!</b>
                      </>}
                      handleClose={togglePopup}
                    />}
                    {apps.name}
                  </a>
                </AppLinks>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TransitionBtn navUrl="#Project" />
    </div>
  );
}
export default Recruitment;


