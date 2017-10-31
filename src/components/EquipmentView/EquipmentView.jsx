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
                        <div className="horizontalBar  backgroundBar bar1"></div>
                        <div className="horizontalBar bar1"></div>
                        <div className="horizontalBar  backgroundBar bar2"></div>
                        <div className="horizontalBar bar2"></div>
                        <div className="horizontalBar backgroundBar bar3"></div>
                        <div className="horizontalBar bar3"></div>
                        <div className="horizontalBar backgroundBar bar4"></div>
                        <div className="horizontalBar bar4"></div>    
                        <div className="box backgroundBar box1"></div>
                        <div className="box box1"></div>  
                        <div className="box backgroundBar box2"></div>
                        <div className="box box2"></div> 
                        <div className="box backgroundBar box3"></div>
                        <div className="box box3"></div> 
                        <div className="box backgroundBar box4"></div>
                        <div className="box box4"></div> 
                    </div>
                    <div className="equipmentBorder">
                    <div className="title">Equipment</div> 
                    </div>
                        <div className="equipmentGrid">
                    <div className="equipmentItem">
                        <img src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpREZyWFg2amIyR0E" alt="triforce" />
                        </div>
                        <div className="linkEquipped">
                    </div>
                    <div className="equipmentItem">
                        <img src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpSFNiTlE3MXRwdXc" alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpTTVTdWF1ZG5Ya2c" alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpbTdjTkk4QlZqNWc" alt="triforce" />
                    </div>
                    <div className="equipmentItem">
                        <img src="https://drive.google.com/uc?id=0Bx7SfLbHi0PpNkc5RmJZWE9SMGs" alt="triforce" />
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