import React, { Component } from "react";
import InventoryView from '../InventoryView/InventoryView'
import MapView from '../MapView/MapView'
import EquipmentView from '../EquipmentView/EquipmentView'
import QuestStatusView from '../QuestStatusView/QuestStatusView'

class Turntable extends Component {
    render() {
        return (
            <div className="center">
               {/* <EquipmentView/> */}
               <InventoryView/>
               {/* <MapView/>
               <QuestStatusView/> */}
            </div>
        )
    }
}

export default Turntable;