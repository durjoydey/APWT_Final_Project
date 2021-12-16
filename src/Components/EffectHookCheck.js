import React, {useState, useEffect} from "react";

const EffectHookCheck =()=>{
    const [count, setCount] = useState(0);
    const [effect, setEffect] = useState(1000);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 3000);
    },[effect]);

    const change=()=>{
        setEffect(effect+1);
    }
  
    return(
        <div>
            <h1>I've rendered {count} times!</h1>;
            <h1>I've rendered {effect} times!</h1>;
            <button onClick={change}>Change</button>

        </div>

    )


}
export default EffectHookCheck;