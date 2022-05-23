import React from "react"

function DisplayData(props: any) {
    const url: string = props.name + ".png";

    var display_value!: string;
    
    if(props.name == "Temperature"){
        display_value = props.value + "°C";
    }else if(props.name == "Humidity"){
        display_value = (props.value*100) + "%";
    }else if(props.name == "Light"){
        display_value = (props.value*100) + "%";
    }else if(props.name == "Dust"){
        display_value = (props.value*100) + "%";
    }

    return (
        <div className="Display-box">
            <img className="Display-icon" src={url} alt={props.name} />
            <div className="Display-text">
                <h2>{props.name}</h2>
                <h1>{display_value}</h1>
            </div>
        </div>
    )
}

export default DisplayData;