import React, {useState} from "react";

function useCounter(e=0){
    let [count, setcount] = useState(e);
    let increment =()=>{setcount(count+1)}
    let decrement =()=>{setcount(count -1)}
    return {count,increment,decrement}
}
export default useCounter;