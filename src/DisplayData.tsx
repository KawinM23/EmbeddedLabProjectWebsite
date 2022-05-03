import React from "react"

function DisplayData(props: any){
    const url: string = props.name + ".png";

    return (
        
        <div className="display-box">
            
            <img className="display-icon" src={url} alt={props.name}/>
            <h2>{props.name}</h2>
            <h1>{props.value}</h1>
        </div>
        
    )
}

export default DisplayData;