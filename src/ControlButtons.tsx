import React from "react"

function ControlButtons(props: any) {
    var autoClass !: string;

    if(props.autoOn){
        autoClass = 'Auto-button Auto-button-on';
    }else{
        autoClass = 'Auto-button Auto-button-off';
    }

    return (
        <button className={autoClass} onClick={props.autoOnClick}>AUTO</button>
    )
}


export default ControlButtons;