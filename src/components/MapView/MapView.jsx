import React, { Component } from "react";
import './MapView.css';
import MapImg from '../../reference/Map.png';

class MapView extends Component {
    render() {
        return (
            <figure className="mapView">
                <img className="map" src={MapImg} alt="map" />
            </figure>
        )
    }
}

export default MapView;