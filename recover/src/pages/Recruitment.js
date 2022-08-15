import TransitionBtn from "../components/TransitionBtn.js"
import "../style/Section.css"
import "../style/Recruitment.css"

function Recruitment() {

    return (
      <div className="section">
        <div className="Recruitment" id="Recruitment" >
            <div className="textWrapperLeft" >
              <div data-aos="fade-in" data-aos-duration="4000"></div>
                <h1 className="title" data-aos="fade-up">Recruitment</h1>
                <p className="p1" data-aos="fade-up">At DevX, we offer both begginer friendly and experienced roles.
</p>
                <p className="p1" data-aos="fade-up">While we offer several developer roles, DevX is not only for students interested in technical experience. We also offer roles for Product Managers, Designers and Marketers.</p>
                <p className="p1" data-aos="fade-up">Our recruitment for Fall of 2022 is coming up soon!</p>
            </div>
        </div>
        <TransitionBtn navUrl="#Project"/>
      </div>
    );    
  }
  export default Recruitment;
  
  