/**
 * Created by beebe on 5/22/2017.
 */
import React, { Component } from 'react';
import "./styles.css"
import Lists from "./subcomponents/Lists/Lists";
export default class Footer extends Component{
    render(){
        return (
            <div className="footerComponent">
                <Lists/>
                <hr style={{borderColor: "grey"}}/>
                <span className="secondSection">
                    <span className="secondSectionLinks">Acrobat Reader DC</span>
                    <span className="secondSectionLinks">Adobe Flash Player</span>
                    <span className="secondSectionLinks">Adobe Air</span>
                    <span className="secondSectionLinks">Adobe Shockwave Player</span>
                </span>
                <hr style={{borderColor: "grey"}}/>
                <div className="citeSection">
                    <span className="cite">
                        <i className="fa fa-globe" aria-hidden="true"></i> Change region <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </span>
                    <span>
                        <cite className="cite">Copyright © 2017 Adobe Systems Incorporated. All rights reserved. / </cite>
                        <cite className="cite">Privacy / </cite>
                        <cite className="cite">Terms of Use / </cite>
                        <cite className="cite">Cookies / </cite>
                        <cite className="cite">  <i className="fa fa-play" aria-hidden="true" style={{color:"blue"}}></i> AdChoices</cite>
                    </span>
                </div>

            </div>
        )
    }
}