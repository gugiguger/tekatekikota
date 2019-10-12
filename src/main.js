import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./intro";
import ScavengerHunt from "./index";
import Preface from "./preface";
import Home from "./home";
import Outro from "./outro";

const Main = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/intro" component={Intro} />
                <Route path="/preface" component={Preface} />
                <Route path="/game" component={ScavengerHunt} />
                <Route path="/outro" component={Outro} />
            </div>
        </Router>
    );
};

export default Main;
