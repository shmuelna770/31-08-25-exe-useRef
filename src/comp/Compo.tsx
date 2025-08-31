import { useRef ,useState} from 'react'
import Child from './child';

export default function Compo() {
        const inputRef = useRef("");
        const[input,setInput] = useState("");
        const txt = useRef("")
        // const 

        // function clear(){
        //     const curr = inputRef
        //     if(curr.current){
        //         curr.current = ""
        //     }
        // }
  return (
    <div>
      <input type="text" placeholder='enter here' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>setInput("")}>clear</button>

      <div>
            <Child/>
      </div>
    </div>

    
  )
}
