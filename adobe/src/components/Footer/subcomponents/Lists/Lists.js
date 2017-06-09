import React from 'react';
import "./styles.css"
export default class Lists extends React.Component{
    render(){
        return (
            <div className="footerComponent">
                <div className="row">
                    <div className="col-lg-2">
                        <ul className="lists">
                            <li>Products</li>
                            <br/>
                            <li className="listColor">Creative Cloud</li>
                            <li className="listColor">Experience Cloud</li>
                            <li className="listColor">Document Cloud</li>
                            <li className="listColor">Special offers</li>
                            <li className="listColor">View all products</li>
                        </ul>
                    </div>
                    <div className="col-lg-5 borderLR">
                        <span className="twoLists">
                        <ul className="lists">
                            <li>Blogs & Community</li>
                            <br/>
                            <li className="listColor">Adobe Conversations</li>
                            <li className="listColor">Creative Cloud blog</li>
                            <li className="listColor">Behance</li>
                            <li className="listColor">99u</li>
                            <li className="listColor">Digital Marketing blog</li>
                        </ul>
                            <ul className="lists">
                              <li className="listColor">CMO.com</li>
                              <li className="listColor">Document Services</li>
                              <li className="listColor">Adobe I/O</li>
                              <li className="listColor">View all</li>
                          </ul>
                        </span>
                        <hr style={{borderColor: "grey"}}/>
                        <span>
                            <i className="fa fa-facebook-official icons"></i>
                            <i className="fa fa-twitter-square icons"></i>
                            <i className="fa fa-linkedin-square icons"></i>
                            <i className="fa fa-instagram icons"></i>
                        </span>
                    </div>
                    <div className="col-lg-2" style={{borderRight: "grey 1px solid"}}>
                        <ul className="lists">
                            <li>Support</li>
                            <br/>
                            <li className="listColor">Adobe Support</li>
                            <li className="listColor">Adobe Learn</li>
                            <li className="listColor">Community Forums</li>
                            <li className="listColor">Contact Adobe</li>
                            <li className="listColor">Download and Install</li>
                        </ul>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="col-lg-2 lists">
                        <ul className="lists">
                            <li>Adobe</li>
                            <br/>
                            <li className="listColor">About</li>
                            <li className="listColor">Newsroom</li>
                            <li className="listColor">Corporate Responsibility</li>
                            <li className="listColor">Investor Relations</li>
                            <li className="listColor">Events</li>
                            <li className="listColor">Careers</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}
