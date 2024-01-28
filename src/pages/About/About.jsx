import { useDispatch, useSelector } from "react-redux"
// import { addCounterAction, minusCounterAction, resetCounterAction } from "../../redux/actions/counterActions"
import { minusCounter, plusCounter, resetCounter } from "../../rtk/counterSlice"
import { useGetPostsQuery } from "../../rtk/apiSlice"

export default function About() {

 const data = useSelector(state => state.counter.value)
 const dispatch = useDispatch()

  const {data: postsData, error, isLoading} = useGetPostsQuery()
  console.log(postsData);
  return (

    <div>
      Counter: {data} <br />
      <button onClick={() => dispatch(minusCounter())}>-</button>
      <button onClick={() => dispatch(plusCounter())}>+</button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{postsData.posts[0].title}</div>
      )}
    </div>
  )
}
