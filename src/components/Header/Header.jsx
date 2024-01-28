import { NavLink } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'

export default function Header() {
  const data = useSelector(state => state.todos)

  return (
    <div className='header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
        {/* <NavLink to='/todolist'>Todo List</NavLink> */}
        <NavLink to='/todolist'>Todo List({data.length})</NavLink>


    </div>
  )
}
