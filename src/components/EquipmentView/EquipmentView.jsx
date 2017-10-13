import React, { Component } from "react";
import './EquipmentView.css';
import '../../App.css'
import EquipmentImg from '../../reference/equipment.png';
import triforceImg from '../../reference/Triforce.png';

class EquipmentView extends Component {
    render() {
        return (
                <figure className="equipment">
                    <div className="equipmentInset">
                        <div className="horizontalBar bar1"></div>
                        <div className="horizontalBar bar2"></div>
                        <div className="horizontalBar bar3"></div>
                        <div className="horizontalBar bar4"></div>    
                    </div>
                    <div className="equipmentBorder">
                    <div className="title">Equipment</div> 
                    </div>
                        <div className="equipmentGrid">
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                        </div>
                        <div className="linkEquipped">
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src={triforceImg} alt="triforce" />
                    </div>
                    </div>
                    
                </figure>
                )
    }
}

export default EquipmentView;