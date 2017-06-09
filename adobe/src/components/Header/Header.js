/**
 * Created by beebe on 5/22/2017.
 */
/**
 * Created by beebe on 5/22/2017.
 */
import React  from 'react';
import logo from "../../assets/logo-Adobe-150x150.jpg"
import "./style.css"


export default class Header extends React.Component{
    render(){
        return (
            <div className="nav-bar">
                <span>
                    <span><img className="logo" src={logo} alt="Adobe logo" /></span>
                    <span>Adobe</span>
                </span>
                <span>
                    <span className="dropDown">Creativity & Design</span>
                    <span className="dropDown">Marketing & Analytics</span>
                    <span className="dropDown">Documents & E-Signatures</span>
                    <span className="dropDown">Business Solutions</span>
                    <span className="dropDown">Support</span>
                </span>
                <span>
                    <span><i className="fa fa-search search"></i></span>
                    <span className="sign-in">Sign In</span>
                </span>
            </div>
        )
    }
}