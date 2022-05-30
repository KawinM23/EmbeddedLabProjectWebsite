import React from "react"

function DisplayData(props: any) {
    const url: string = props.name + ".png";

    var display_value!: string;

    if(props.value!=null){
        if (props.name == "Temperature") {
            display_value = props.value + "°C";
        } else if (props.name == "Humidity") {
            display_value = (props.value);
        } else if (props.name == "Brightness") {
            display_value = (props.value);
        } else if (props.name == "PM") {
            display_value = (props.value);
        }
    } else {
        display_value = "N/A";
    }


    return (
        <div className="Display-box">
            <img className="Display-icon" src={url} alt={props.name} />
            <div className="Display-text">
                <h2>{props.name}</h2>
                <h1>{display_value}</h1>
            </div>
        </div>

        // <table>
        //     <tr>
        //         <td>
        //         <img className="Display-icon" src={url} alt={props.name} />
        //         </td>
        //         <td>
        //         <div className="Display-text">
        //         <h2>{props.name}</h2>
        //         <h1>{display_value}</h1>
        //         </div>
        //         </td>
        //     </tr>
        // </table>
    )
}

export default DisplayData;