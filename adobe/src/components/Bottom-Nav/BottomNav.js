/**
 * Created by beebe on 5/22/2017.
 */
import React, { Component } from "react"
import { Link }  from "react-router-dom"
import "./styles.css"

export default class BottomNav extends Component{
    render(){
        return (
            <div>

                <div>
                    <span className="navLinks">
                        <Link to="/" className="routerLinks"> <h3>Creative Cloud</h3> <p>Everything you need to create anywhere</p></Link>
                        <Link to="/secondpage" className="routerLinks"> <h3>Experience Cloud</h3> <p>Marketing, data, and advertising solutions</p> </Link>
                        <Link to="/thirdpage" className="routerLinks"> <h3>Document Cloud</h3> <p>The complete digital document solution</p> </Link>
                        <Link to="" className="routerLinks"> <p>Acrobat Reader DC, Flash Player, Adobe AIR, <br/> Shockwave Player and more</p> </Link>
                    </span>
                </div>
            </div>
        )
    }
}



