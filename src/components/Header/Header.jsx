import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/posts'>Posts</NavLink>


    </div>
  )
}
