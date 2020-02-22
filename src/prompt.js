import React from "react";

export default class Prompt extends React.Component {
    renderInstructions() {
        if (this.props.shouldShowLink) {
            return (
                <a href="./outro" id="outroBtn">
                    Next >>>
                </a>
            );
        }
        return <p />;
    }

    render() {
        return (
            <div className="promptMain">
                <div className="promptHeader">
                    <h2>{this.props.step} of 17</h2>
                </div>
                <div className="promptBody">
                    <p>{this.props.instructions}</p>
                    {this.renderInstructions()}
                </div>
            </div>
        );
    }
}
