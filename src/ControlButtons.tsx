import { ref, set } from "firebase/database";
import React from "react"
import { database } from "./App";

function ControlButtons(props: any) {
    var autoClass !: string;
    var hClass !: string;

    if (props.autoOn) {
        autoClass = 'Auto-button Auto-button-on';
        hClass = 'h-level h-level-off';
    } else {
        autoClass = 'Auto-button Auto-button-off';
        hClass = 'h-level h-level-on';
    }

    function UpdateSlider(s: string) {
        if (!props.autoOn) {
            props.setSlider(s);
            set(ref(database, "speed"), +s);
        }
    }

    return (
        <div className="Control-buttons">
            <button className={autoClass} onClick={props.autoOnClick}>AUTO</button>
            <div>
                <h2 className={hClass}>Fan Level</h2>
                <input
                    className="Slider"
                    type="range"
                    min={0} max={999}
                    disabled={props.autoOn}
                    defaultValue={0}
                    value={props.slider}
                    onChange={e => UpdateSlider(e.target.value)}
                />
            </div>
        </div>
    )
}


export default ControlButtons;