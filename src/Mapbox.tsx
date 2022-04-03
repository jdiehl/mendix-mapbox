import { createElement, FunctionComponent } from "react";
import { Map } from "./components/Map";

import { MapboxContainerProps } from "../typings/MapboxProps";

import "leaflet/dist/leaflet.css";

const Mapbox: FunctionComponent<MapboxContainerProps> = props => {
    const { width, height, mapboxToken, markerList, latitudeAttr, longitudeAttr } = props;

    // make sure mapbox token is set
    if (!mapboxToken.value) {
        return null;
    }

    // make sure markers are loaded
    if (!markerList || markerList.status !== "available" || markerList.items === undefined) {
        return null;
    }

    // make sure attributes are set
    if (!latitudeAttr || !longitudeAttr) {
        return null;
    }

    // read coordinates
    const path: Array<[number, number]> = markerList.items.map(item => [
        latitudeAttr.get(item).value?.toNumber() || 0,
        longitudeAttr.get(item).value?.toNumber() || 0
    ]);

    // set up styles
    const style = { width, height };

    return <Map style={style} mapboxToken={mapboxToken.value} path={path} />;
};

export default Mapbox;
