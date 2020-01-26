import React, {useState, useEffect} from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';


import '../Map.scss';

//mapboxGL

function Map() {
    const MapBoxGL = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoibGVuYWJvcm8iLCJhIjoiY2s1c2RlZG80MGt2czNrbXVrY282czBjcyJ9.RGiJeeUESgJORZ7aD4dXLw'
    });

    return (
        <div>
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css' rel='stylesheet' />
            <h1 className="h1">Map page</h1>

            <MapBoxGL
            style="mapbox://styles/mapbox/streets-v9"
                           style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw'
            }}>
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </MapBoxGL>
        </div>
    );
}

export default Map;