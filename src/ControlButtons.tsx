import React, { MutableRefObject, useRef } from "react"

function ControlButtons(props: any) {
    var autoClass !: string;
    var hClass !: string;

    if (props.autoOn) {
        autoClass = 'Auto-button Auto-button-on';
        hClass = 'h-level h-level-off';
    }else{
        autoClass = 'Auto-button Auto-button-off';
        hClass = 'h-level h-level-on';
    }

    function UpdateSlider(s:string){
        if (!props.autoOn) {
            props.slider(s);
        }
    }

    return (
        <div className="Control-buttons">
            <button className={autoClass} onClick={props.autoOnClick}>AUTO</button>
            <div>
                <h2 className={hClass}>Fan Level</h2>
                <input className="Slider" type="range" disabled={props.autoOn} defaultValue={0} onChange={e => UpdateSlider(e.target.value)}/>
            </div>
        </div>
    )
}


export default ControlButtons;