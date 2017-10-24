import React, { Component } from "react";
import './MapView.css';
import MapImg from '../../reference/Map.png';

class MapView extends Component {
    render() {
        return (
            <figure className="mapView">
                <div className="mapBorder">
                <img className="map" src={MapImg} alt="map" />
            </div>
            </figure>
        )
    }
}

export default MapView;