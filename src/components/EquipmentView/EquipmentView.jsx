import React, { Component } from "react";
import EquipmentImg from '../../reference/equipment.png';

class EquipmentView extends Component {
    render() {
        return (
            <div>
                 <img src={EquipmentImg} alt="equipment" />
            </div>
        )
    }
}

export default EquipmentView;