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
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="medallionArea">
                        <div className="image-container">
                            <img className="wrap-img outerHex" src="http://www.pngall.com/wp-content/uploads/2016/04/Hexagon-PNG.png" />
                            <img className="wrap-img innerHex" src="http://www.pngall.com/wp-content/uploads/2016/04/Hexagon-PNG.png" />
                            <img className="triforce tri1" src="http://www.freeiconspng.com/uploads/triangle-shape-png-25.png" />
                            <img className="triforce tri2" src="http://www.freeiconspng.com/uploads/triangle-shape-png-25.png" />
                            <img className="triforce tri3" src="http://www.freeiconspng.com/uploads/triangle-shape-png-25.png" />
                            <img className="light medallion" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/5/5b/Light_Medallion_Ganon%27s_Castle.png?version=eec458a591c52cba152eeaf1076d1229" />
                            <img className="forest medallion" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/0/0f/Forest_Medallion_Ganon%27s_Castle.png?version=9995282e44421202ff8a48067f777e9c" />
                            <img className="fire medallion" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/6/65/Fire_Medallion_Ganon%27s_Castle.png?version=e16e8ebbba8992fbddbc06f6b78c1592" />
                            <img className="water medallion" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/4/4d/Water_Medallion_Ganon%27s_Castle.png?version=98d867b768a6e3aa07cab705c944d225" />
                            <img className="spirit medallion" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/2e/Spirit_Medallion_Ganon%27s_Castle.png?version=c95d8cb2675257948a7f1894ae9a8792" />
                            <img className="shadow medallion" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/8/83/Shadow_Medallion_Ganon%27s_Castle.png?version=bae7c29bc0ac49acaf547e8a81ca8462" />
                        </div>
                    </div>
                    <div className="noteArea">

                    </div>
                    <div className="staffArea">
                        <img className="trebleClef" src={clefImg} alt="Treble Clef" />
                        <img className="trebleStaff" src={staffImg} alt="Treble staff" />
                    </div>

                    <div className="stoneArea">

                    </div>


                </div>
            </figure>
        )
    }
}

export default QuestStatusView;

