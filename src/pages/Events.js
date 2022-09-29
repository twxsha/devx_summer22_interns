import React from "react";
import ReactDOM from "react-dom";

import "../style/Events.css";

class Events extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="Events" id="Events">
            <div data-aos="fade-in" data-aos-duration="6000"></div>
            <h1 className="title" data-aos="fade-down" data-aos-delay="0">EVENTS</h1>
            <div className="calendar" id="cal" data-aos="fade-down" data-aos-delay="0">
              <div className = "responsive" dangerouslySetInnerHTML={{ __html: "<iframe src='https://calendar.google.com/calendar/embed?src=c_kgm6ebnif741k5sgqnhdq879e8%40group.calendar.google.com&ctz=America%2FLos_Angeles' width='1200px' height='800px' style='border: 25px solid #5DABAA;' />"}} />;
            </div>
            <p className="SubtitleText">
                <a href="https://www.google.com/">RSVP for our next event!</a>
            </p>
        </div>
      </div>
    );

    ReactDOM.render(<Events />, document.getElementById("cal"));
  }
}
export default Events;