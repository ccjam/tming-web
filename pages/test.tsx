import React, { useState } from "react";

const Test = () =>{
    const [count, setCount] = useState<number>();
    return(<div>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setCount(count - 1)}>-</button>
   </div>)
}

export default Test;