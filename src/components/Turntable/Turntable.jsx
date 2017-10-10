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
            // {
            //     component: InventoryView,
            //     rotationFactor: 0
            // },
            // {
            //     component: MapView,
            //     rotationFactor: 0
            // },
            // {
            //     component: QuestStatusView,
            //     rotationFactor: 0
            // },
        ];
    }
    render() {
        const views = this.views.map((view) => {
            return (
                <div className="center-box" style = {
                    {transform: "rotateY(" + view.rotationFactor + "deg)"
                    } 
                }>
                <view.component style={
                    {opacity: ".5"}
                }/>
                </div>
            )
           
        })

        return (
            <div id ="cube">
                {views}

            </div>
        )
    }
}

export default Turntable;