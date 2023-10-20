import { useDispatch, useSelector } from "react-redux"
import { increment,decrement } from "../features/counterSlice"
export default function Counter() {
    const count = useSelector((state)=>state.count.value)
    const dispatch = useDispatch()
  return (
    <>
        <div>
            <button onClick={()=>{
                dispatch(increment())
            }}>+</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>-</button>
        </div>
        <div>
            {count}
        </div>
    </>
    )
}
