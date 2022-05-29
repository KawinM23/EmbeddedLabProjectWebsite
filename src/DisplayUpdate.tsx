import React from "react"

function DisplayUpdate(props: any) {

    return (
        <div className="Display-update">
            <h2 className="Update-time">Lastest Update: {props.time}</h2>
            <button className="Update-button" onClick={props.update}>Update</button>
        </div>
    )
}

export default DisplayUpdate;