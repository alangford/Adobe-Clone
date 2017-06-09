import React, { Component } from 'react';
import "./styles.css"
export default class SecondPage extends Component{
    render(){
        return (
            <div>
                <div className="main-section2">
                    <div>
                        <h2 className="color-white">Make experience your business.</h2>
                        <h5 className="color-white">Deliver amazing customer experiences with an integrated set of solutions to build
                            <br/> campaigns, manage advertising, and gain data insights.</h5>
                        <button className="color-button">Learn about Experience Cloud</button>
                    </div>
                </div>
                <div className="second-section">
                    <span className="color-orange">Adobe stands alone as the Leader in Digital Intelligence Platforms.</span>
                    <span className="second-links">Learn more ></span>

                </div>
            </div>
        )
    }
}