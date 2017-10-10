import React, { Component } from "react";
import './Footer.css';
import rupee from '../../reference/rupee.png';

class Footer extends Component {
    render() {
        return (
            <div className="bottom">
                <div className="rupees">
                    <img className="rupee" src={rupee} alt="rupee" />
                    <div className="rupeeCount">500</div>
                </div>
                <div className="selectText"></div>
            </div>
        )
    }
}
export default Footer;