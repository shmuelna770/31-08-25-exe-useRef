import { useEffect, useRef, useState } from "react"
export default function Counter() {
        const[count,setCount] = useState(0)
        const prevCount = useRef(0)

        useEffect(()=>{
            prevCount.current = count;

        },[count])
        const plus = ()=> setCount(count+1);
        const minus = ()=> setCount(count-1);

  return (
    <div>
        <p>
            corrent:{count}(___prev:{prevCount.current})
        </p>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}
