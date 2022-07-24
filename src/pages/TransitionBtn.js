import React, { Component } from 'react';
import Arrow from '../images/down-arrow-svgrepo-com.svg'

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
        var btn = document.getElementById('transitionBtn');
        btn.addEventListener('click',()=>{
            window.location.href="/"+this.state.navUrl;
        })
        
    }

    render() {

        return (
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}> 
                <img id="transitionBtn" src={Arrow} width="40px" style={{
                height:"auto",
                clear: 'both',
                position: 'relative',
                marginTop: '90vh',
                cursor:'pointer'
                
            }}/>
            </div>
        );
    }
}

export default TransitionBtn;
