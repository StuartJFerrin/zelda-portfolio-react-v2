import React, { Component } from "react";

class Controls extends Component {
    render() {
        const hearts = Array(13)
            .fill(undefined)
            .map(() => <div className="heart" />);
        return (
            <div>
                <div className="top">
                     <div className="hearts">
                        {hearts}
                    </div>
                    <div className="redButton">Return</div>
                    <div className="greenButton">Save</div>
                    <div className="blueButton">Decide</div>

                    <div className="arrowButtons">
                        <div className="leftYellowArrow"></div>
                        <div className="downYellowArrow"></div>
                        <div className="rightYellowArrow"></div>
                    </div>
                </div>
                <div className="magicMeter">Meter</div>
            </div>
        )
    }
}

export default Controls;