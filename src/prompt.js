import React from "react";

export default class Prompt extends React.Component {
    renderInstructions() {
        if (this.props.shouldShowLink) {
            return (
            <a href="https://www.google.com" target='_blank' rel="noopener noreferrer">
                {this.props.instructions}
            </a>
            )
        }
        return <p>{this.props.instructions}</p>;
    }

    render() {
        return (
            <div>
                <div className="promptHeader">
                    <h2>{this.props.step} of 18</h2>
                </div>
                <div className="promptBody">
                    {this.renderInstructions()}
                </div>
            </div>
        );
    }
}
