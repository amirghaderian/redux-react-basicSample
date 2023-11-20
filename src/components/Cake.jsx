import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Cake = () => {
  const [value, setValue] = useState(0)
  //1. accepts a function as its parameter: selector function
  //2. useSelector hooks return whatever returns by selector function
  const state = useSelector(state=>state.numOfCakes)
  //1. returns a reference to dispatch function in redux store
  const dispatch = useDispatch(action=>action)
  console.log(value);
  return (
    <div><h2>Cake Number:{state} </h2> 
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="0" />
    <button onClick={()=>dispatch({type:"BYE_CAKE",payload:value})}>Buy Cake</button>
   </div>
  )
}

export default Cake