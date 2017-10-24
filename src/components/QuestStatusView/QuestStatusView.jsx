import React, { Component } from "react";
import './QuestStatusView.css';
import '../../App.css';
import triforceImg from '../../reference/Triforce.png';
import clefImg from '../../reference/hero clef4.png';
import staffImg from '../../reference/Staff2.png';

class QuestStatusView extends Component {
    render() {
        return (
            <figure className="quest">

                <div className="questBorder">
                    <div className="title">Quest Status</div>
                </div>
                <div className="questGrid">
                    <div className="topLeftArea">
                        <div></div>
                        <div></div>
                        <div className="picArea"> </div>
                        <div className="gitArea">50</div>
                    </div>
                    
                    <div className="medallionArea">
                        <div className="image-container">
                            <img className="wrap-img outerHex" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpMk1YS1c1bWxfenM" />
                            <img className="wrap-img innerHex" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpMk1YS1c1bWxfenM" />
                            <img className="triforce tri1" src="http://www.freeiconspng.com/uploads/triangle-shape-png-25.png" />
                            <img className="triforce tri2" src="http://www.freeiconspng.com/uploads/triangle-shape-png-25.png" />
                            <img className="triforce tri3" src="http://www.freeiconspng.com/uploads/triangle-shape-png-25.png" />
                            <img className="light medallion" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpUjEwLTR1eWNvbjg" />
                            <img className="forest medallion" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpQThUTWRFNlRneUU" />
                            <img className="fire medallion" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpbHVxaVoxeHMyb00" />
                            <img className="water medallion" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpVzRVOVA5Zm1CeE0" />
                            <img className="spirit medallion" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpM0xpeE9UalRRejA" />
                            <img className="shadow medallion" src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpLXNsZjE0XzZWOXc" />
                        </div>
                    </div>
                    <div className="noteArea">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    </div>
                    <div className="staffArea">
                        <img className="trebleClef" src={clefImg} alt="Treble Clef" />
                        <img className="trebleStaff" src={staffImg} alt="Treble staff" />
                    </div>

                    <div className="stoneArea">
                        <div className="stoneBar bStoneBar"> </div> 
                        <div className="stoneBar"></div>

                    </div>


                </div>
            </figure>
        )
    }
}

export default QuestStatusView;

