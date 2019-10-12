import React from "react";
import outroImg from "./tekatekikota_outro.gif";

export default class Outro extends React.Component {
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
            <div className="outro">
                <img src={outroImg} alt="Sabeni" id="imgIntro" />
            </div>
        );
    }
}
