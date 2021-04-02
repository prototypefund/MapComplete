import {UIElement} from "../UIElement";
import * as L from "leaflet";
import AvailableBaseLayers from "../../Logic/Actors/AvailableBaseLayers";

/**
 * A small component which can show a small map, usefull to embed in the info popup - to show the selected element
 */

export default class EmbeddedMap extends UIElement {
    
    constructor() {
        super();
        this.SetClass("block")
        this.SetStyle("width: 100%; height: 5em; background: red")
    }
    
    InnerRender(): string {
        return "";
    }

    protected InnerUpdate(htmlElement: HTMLElement) {
        super.InnerUpdate(htmlElement);
console.log("Inited ", htmlElement.id)
        const map = L.map(htmlElement.id, {
            center: [51.2, 3.2],
            zoom: 14,
            layers: [AvailableBaseLayers.osmCarto.layer],
            zoomControl: false,
            attributionControl: false

        });
        
    }

}