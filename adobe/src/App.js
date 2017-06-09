import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home"
import SecondPage from "./components/Second-Page/SecondPage";
import ThirdPage from "./components/Third-Page/ThirdPage";
import PageNotFound from "./components/404page.js";
import BottomNav from "./components/Bottom-Nav/BottomNav"
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/secondpage" component={SecondPage}/>
                    <Route path="/thirdpage" component={ThirdPage} />
                    <Route path="*" component={PageNotFound}/>
                </Switch>
                <BottomNav/>
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
