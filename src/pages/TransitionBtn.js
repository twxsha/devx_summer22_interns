import React, { Component } from "react";
import Arrow from "../images/down-arrow-svgrepo-com.svg";

class TransitionBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navUrl: "",
    };
  }

  componentDidMount() {
    this.setState({
      navUrl: this.props.navUrl,
    });
    var btn = document.getElementById("transitionBtn");
    btn.addEventListener("click", () => {
      window.location.href = "/" + this.state.navUrl;
    });
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "25%",
          right: "25%",
          bottom: "37.5%",
        }}
      >
        <img id="transitionBtn" src={Arrow} style={{}} />
      </div>
    );
  }
}

export default TransitionBtn;
