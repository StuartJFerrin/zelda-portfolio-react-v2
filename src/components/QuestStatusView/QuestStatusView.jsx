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
                        <div className="item1"></div>
                        <div className="item1"></div>
                        <div className="picArea"> <img className="headshot" src="https://static.zerochan.net/Link.%28Breath.of.the.Wild%29.full.2009958.jpg" /> </div>
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
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/21/Grey_Note.png?version=5474563f8343ecaeb333d476969a5de1" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/21/Grey_Note.png?version=5474563f8343ecaeb333d476969a5de1" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/21/Grey_Note.png?version=5474563f8343ecaeb333d476969a5de1" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/21/Grey_Note.png?version=5474563f8343ecaeb333d476969a5de1" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/21/Grey_Note.png?version=5474563f8343ecaeb333d476969a5de1" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/2/21/Grey_Note.png?version=5474563f8343ecaeb333d476969a5de1" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/e/e4/Green_Note.png?version=73f82771b96d15d46187abe848580fa0" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/f/f0/Red_Note.png?version=c3ab7cdfaab7836d4ddb815282be51ba" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/0/0f/Blue_Note.png?version=40e4ff9c9a2b754130926e3d837d9b35" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/a/a4/Orange_Note.png?version=1b92e08a6481b2e529d86031fa570755" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/9/97/Purple_Note.png?version=4ff639775d0dfce6a0a7cb1bf87ca8e0" /></div>
                        <div><img className="note" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/9/90/Yellow_Note.png?version=f1b3aa10c253d4bb9a5acbad21f41f6f" /></div>

                    </div>
                    <div className="staffArea">
                        <img className="trebleClef" src={clefImg} alt="Treble Clef" />
                        <img className="trebleStaff" src={staffImg} alt="Treble staff" />
                    </div>

                    <div className="stoneArea">
                        <div className="stoneBar bStoneBar"> </div>
                        <div className="stoneBar">
                            <img className="stone" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/1/18/Kokiri%27s_Emerald_icon.png?version=92d00d18612f4ad1f56d40b0cf35ffdb" />
                            <img className="stone" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/b/b8/Goron%27s_Ruby_icon.png?version=9c5ea586060f11b68cbdaf61d72c5fd9" />
                            <img className="stone" src="https://zelda.gamepedia.com/media/zelda.gamepedia.com/e/e4/Zora%27s_Sapphire_icon.png?version=48969b35ee3b6962f6f16ae45a593692" />
                        </div>

                    </div>


                </div>
            </figure>
        )
    }
}

export default QuestStatusView;

