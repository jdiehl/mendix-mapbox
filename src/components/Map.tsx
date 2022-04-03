import { LatLngExpression } from "leaflet";
import { createElement, ReactElement, CSSProperties } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

interface MapProps {
    style: CSSProperties;
    mapboxToken: string;
    path: LatLngExpression[];
}

export function Map({ style, mapboxToken, path }: MapProps): ReactElement {
    const tileUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`;
    return (
        <MapContainer style={style} center={path[0]} zoom={13}>
            <TileLayer attribution="Mapbox" url={tileUrl} />
            <Polyline positions={path} />
        </MapContainer>
    );
}
