import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCounterAction, minusCounterAction, resetCounterAction } from "../../redux/actions/counterActions"

export default function About() {

 const data = useSelector(state => state.counter.counter)

 const dispatch = useDispatch()

  return (

    <div>
      
      Counter: {data} <br />
      <button onClick={() => dispatch(minusCounterAction())}>-</button>
      <button onClick={() => dispatch(addCounterAction())}>+</button>
      <button onClick={() => dispatch(resetCounterAction())}>reset</button>
    </div>
  )
}
