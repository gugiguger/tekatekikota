import React from "react";
import prefaceImg from "./tekatekikota_intro.gif";

export default class Preface extends React.Component {
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
            <div className="preface">
                <img id="imgPreface" src={prefaceImg} alt="logo" />
                <a href="./game" id="introBtn">
                    Next >>>
                </a>
            </div>
        );
    }
}
