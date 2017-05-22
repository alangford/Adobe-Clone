/**
 * Created by beebe on 5/22/2017.
 */
import React, { Component } from 'react';
import "./styles.css"
export default class Footer extends Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2">
                        <ul>
                            <li>Products</li>
                            <br/>
                            <li>Creative Cloud</li>
                            <li>Creative Cloud</li>
                            <li>Creative Cloud</li>
                            <li>Creative Cloud</li>
                            <li>Creative Cloud</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li>Blogs & Community</li>
                            <br/>
                            <li>Adobe Conversations</li>
                            <li>Adobe Conversations</li>
                            <li>Adobe Conversations</li>
                            <li>Adobe Conversations</li>
                            <li>Adobe Conversations</li>
                        </ul>
                        <hr/>
                        <span>Icon</span>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-2"></div>
                </div>
                <hr/>
                <div></div>
                <hr/>
                <div></div>

            </div>
        )
    }
}