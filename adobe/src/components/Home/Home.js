/**
 * Created by beebe on 5/22/2017.
 */
import React, { Component } from 'react';
import "./styles.css"
export default class Home extends Component{
    render(){
        return (
            <div>
                <div className="main-section">
                    <div>
                        <h2 className="color-white">Creative Cloud for teams.<br/>
                            A better way of working together</h2>
                        <h5 className="color-white">With collaboration tools built into all your favorite creative apps, it’s <br/>
                            easy to store, share, and sync assets securely and create amazing <br/>
                            work — in the office, at home, or on the road.</h5>
                        <button className="color-button">Learn about Creative Cloud for teams</button>
                        <h5 className="color-orange">Plans start at just $29.99/mo per license <i className="fa fa-caret-right"></i> </h5>
                    </div>
                </div>
                <div className="second-section">
                    <span className="color-orange">Special offers for: </span>
                    <span className="second-links">Students</span>
                    <span> | </span>
                    <span  className="second-links">Photographers</span>
                    <span> | </span>
                    <span  className="second-links">Business</span>
                    <span> | </span>
                    <span  className="second-links">Adobe Stock</span>
                </div>
            </div>
        )
    }
}