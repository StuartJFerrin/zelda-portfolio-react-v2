import React, { Component } from "react";
import './HUD.css';

class HUD extends Component {
    render() {
        const hearts = Array(13)
            .fill(undefined)
            .map(() => <div className="heart" />);
        return (
            <div className="HUD">
               
                <div className="flex-spacer" />
                <div className="bottom"></div>

            </div>
        )
    }
}

export default HUD;