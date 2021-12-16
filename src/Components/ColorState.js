import React, { useState } from "react";

const ColorState=()=>{
    var [color, setColor] = useState("Pink");

    return(
        <div>
            <h1 style={{backgroundColor: color}}>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("Red")} >Red</button>
            <button type="button" onClick={() => setColor("green")} >Green</button>
            <button type="button" onClick={() => setColor("Blue")} >Blue</button>
        </div>
    )
}
export default ColorState;