import React from "react"
import TextTransition, { presets } from "react-text-transition";

function DisplayUpdate(props: any) {
    return (
        <div className="Display-update">   
            <h2 className="Update-time">Latest Update: <TextTransition text={props.time} springConfig={ presets.stiff } inline/></h2>
            <button className="Update-button" onClick={props.update}>Update</button>
        </div>
    )
}

export default DisplayUpdate;