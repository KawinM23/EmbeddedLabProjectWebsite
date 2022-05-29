import React from "react"

function ControlButtons(props: any) {
    var autoClass !: string;

    if(props.autoOn){
        autoClass = 'Auto-button Auto-button-on';
    }else{
        autoClass = 'Auto-button Auto-button-off';
    }

    return (
        <div>
            <button className={autoClass} onClick={props.autoOnClick}>AUTO</button>
            <input className="Slider" type="range" disabled={props.autoOn} defaultValue={0} onChange={e => props.slider(e.target.value)}/>
        </div>
    )
}


export default ControlButtons;