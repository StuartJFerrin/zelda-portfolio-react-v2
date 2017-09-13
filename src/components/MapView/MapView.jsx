import React, { Component } from "react";
import MapImg from '../../reference/Map.png';

class MapView extends Component {
    render() {
        return (
            <div>
                <img clasName="center map" src={MapImg} alt="map" />
            </div>
        )
    }
}

export default MapView;