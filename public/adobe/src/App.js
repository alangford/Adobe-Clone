import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Route path="/" exact component={Home} />
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
