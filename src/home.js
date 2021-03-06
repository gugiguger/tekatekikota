import React from "react";
import homeImg from "./assets/tekatekikota-gif-transparent.gif";

export default class Home extends React.Component {
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
            <div className="home">
                <a href="./intro">
                    <img src={homeImg} alt="Tekatekikota" id="imgHome" />
                </a>
                <a href="./intro" id="textHome" class="blink">
                    tap to enter
                </a>
            </div>
        );
    }
}
