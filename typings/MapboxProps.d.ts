/**
 * This file was generated from Mapbox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface MapboxContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    mapboxToken: DynamicValue<string>;
    pointList?: ListValue;
    latitudeAttr?: ListAttributeValue<Big>;
    longitudeAttr?: ListAttributeValue<Big>;
    pathList?: ListValue;
    pathAttr?: ListAttributeValue<string>;
    width: string;
    height: string;
}

export interface MapboxPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    mapboxToken: string;
    pointList: {} | { type: string } | null;
    latitudeAttr: string;
    longitudeAttr: string;
    pathList: {} | { type: string } | null;
    pathAttr: string;
    width: string;
    height: string;
}
