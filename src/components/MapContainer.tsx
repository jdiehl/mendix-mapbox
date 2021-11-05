import { Circle } from "phosphor-react";
import { createElement, FC, ReactNode, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { DynamicValue, ListValue, ListAttributeValue, ObjectItem } from "mendix";
import Big from "big.js";

interface MapContainerProps {
    accessToken: DynamicValue<string>;
    width: string;
    height: string;
    markerList?: ListValue;
    latitudeAttr?: ListAttributeValue<Big>;
    longitudeAttr?: ListAttributeValue<Big>;
}

export const MapContainer: FC<MapContainerProps> = ({
    accessToken,
    width,
    height,
    markerList,
    latitudeAttr,
    longitudeAttr
}) => {
    // the viewport state
    const [viewport, setViewport] = useState({
        latitude: 50.7753455,
        longitude: 6.0838868,
        zoom: 12
    });

    function makeMarker(item: ObjectItem): ReactNode {
        const latitude = latitudeAttr!.get(item).value!.toNumber();
        const longitude = longitudeAttr!.get(item).value!.toNumber();
        return (
            <Marker latitude={latitude} longitude={longitude}>
                <Circle size={8} className="text-primary mapbox-marker-transition" weight="fill" />
            </Marker>
        );
    }

    function makeMarkers(): ReactNode[] | null {
        if (!markerList || !latitudeAttr || !longitudeAttr) {
            return null;
        }
        if (markerList.status !== "available" || !markerList.items) {
            return null;
        }
        return markerList.items.map(item => makeMarker(item));
    }

    return (
        <ReactMapGL
            mapboxApiAccessToken={accessToken.value}
            {...viewport}
            width={width || "100%"}
            height={height || "80vh"}
            style="mapbox://styles/mapbox/light-v11"
            onViewportChange={(viewport: any) => setViewport(viewport)}
        >
            {makeMarkers()}
        </ReactMapGL>
    );
};
