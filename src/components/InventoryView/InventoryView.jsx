import React, { Component } from "react";
import triforceImg from '../../reference/Triforce.png';

class InventoryView extends Component {
    render() {
        const inventoryItems = Array(24)
            .fill(undefined)
            .map(() => (
                <div className="item">
                    <img src={triforceImg} alt="triforce" />
                </div>
            ));
        return (
            <div>
                {inventoryItems}
            </div>
        )
    }
}

export default InventoryView;