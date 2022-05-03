import React from "react"

function DisplayData(props: any) {
    const url: string = props.name + ".png";

    return (

        <div className="Display-box">

            <img className="Display-icon" src={url} alt={props.name} />
            <div className="Display-text">
                <h2>{props.name}</h2>
                <h1>{props.value}</h1>
            </div>
        </div>

    )
}

export default DisplayData;