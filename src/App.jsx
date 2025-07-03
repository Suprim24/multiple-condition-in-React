import { useState } from "react"

function App()
{
  const [count,setCount]=useState(0)
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)} >Update</button>
      {
        count==0?<h1>Count 0</h1>
        :count==1?<h1>Count 1</h1>
        :count==2?<h1>Count 2</h1>
        :count==3?<h1>Count 3</h1>
        :<h1>other Conditions</h1>
      }
    </div>
  )
}
export default App