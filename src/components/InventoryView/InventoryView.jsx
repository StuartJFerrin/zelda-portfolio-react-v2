import React, { Component } from "react";
import './InventoryView.css';
import triforceImg from '../../reference/Triforce.png';

class InventoryView extends Component {
    render() {
        return (
            <figure className="inventory">
                 <div className="inventoryInset">
                 <div className="bar hbar1 bBar"></div>
                 <div className="bar hbar1"></div>
                 <div className="bar hbar2 bBar"></div>
                 <div className="bar hbar2"></div>
                 <div className="bar vbar1 bBar"></div>
                 <div className="bar vbar1"></div>
                 <div className="bar vbar2 bBar"></div>
                 <div className="bar vbar2"></div>
                 <div className="knob knob1 bBar"></div>
                 <div className="knob knob1 "></div>
                 <div className="knob knob2 bBar"></div>
                 <div className="knob knob2"></div>
                 <div className="knob knob3 bBar"></div>
                 <div className="knob knob3"></div>
                 <div className="knob knob4 bBar"></div>
                 <div className="knob knob4"></div>
                 <div className="knob knob5 bBar"></div>
                 <div className="knob knob5"></div>
                 <div className="knob knob6 bBar"></div>
                 <div className="knob knob6"></div>
                 <div className="knob knob7 bBar"></div>
                 <div className="knob knob7"></div>
                    </div>
                    <div className="inventoryBorder">
                        <div className="title">Select Item</div> 
                        </div>
                        <div className="inventoryGrid"> <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                <div className="inventoryItem">
                    <img src={triforceImg} alt="triforce" />
                </div>
                </div>
            </figure>
        )
    }
}

export default InventoryView;