import React, { Component } from 'react';
import Arrow from '../images/down-arrow.svg'
import "../style/TransitionBtn.css"

class TransitionBtn extends Component {
    constructor(props){
        super(props)
        this.state = {
            navUrl : "",
        }
    }

    componentDidMount(){
        this.setState({
            navUrl:this.props.navUrl
        })

        
    }

    navToNext=()=>{
        setTimeout(()=>{window.location.href=""+this.state.navUrl},0);
    }

    render() {

        return (
            <div  class="transitionBtn animate__animated animate__bounce animate__repeat-2 animate__slower" data-aos="fade-up"  data-aos-anchor-placement="top-bottom" data-aos-delay="300" onClick={this.navToNext} 
                style={{
                zIndex:"10",
                display:'flex',
                justifyContent:'center',
                position: 'relative',
            }}> 
                <img id="transitionBtn" 
                   src={Arrow} width="40px" style={{
                height:"auto",
                clear: 'both',
                position: 'relative',
                cursor:'pointer'
                
            }}/>
            </div>
        );
    }
}

export default TransitionBtn;
