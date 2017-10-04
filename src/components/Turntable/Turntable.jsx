import React, { Component } from "react";
import InventoryView from '../InventoryView/InventoryView'
import MapView from '../MapView/MapView'
import EquipmentView from '../EquipmentView/EquipmentView'
import QuestStatusView from '../QuestStatusView/QuestStatusView'


class Turntable extends Component {
    constructor() {
        super();
        this.state = {
            rotation: 0,
        }
        this.views = [
            
            {
                component: EquipmentView,
                rotationFactor: 0
            },
            {
                component: InventoryView,
                rotationFactor: 270
            },
            {
                component: MapView,
                rotationFactor: 180
            },
            {
                component: QuestStatusView,
                rotationFactor: 90
            },
        ];
    }
    render() {
        const views = this.views.map((view) => {
            return (
                <div className="center-box" style = {
                    {transform: "rotateY(" + view.rotationFactor + "deg)"}
                }>
                <view.component style={
                    {opacity: ".5"}
                }/>
                </div>
            )
           
        })

        return (
            <div className="center">
                {views}

            </div>
        )
    }
}

export default Turntable;