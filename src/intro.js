import React from "react";
import introImg from "./tekatekikota_home(1).gif";

export default class Intro extends React.Component {
    constructor() {
        super();
        this.pressEnter = this.pressEnter.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keypress", this.pressEnter);
    }

    pressEnter(e) {
        if (e.which === 13) {
            window.location.replace("/game");
        }
    }

    render() {
        return (
            <div className="intro">
                <img src={introImg} alt="Sabeni" id="imgIntro" />
                <a href="./preface" id="introBtn">
                    Next >>>
                </a>
            </div>
        );
    }
}
