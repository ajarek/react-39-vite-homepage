import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Navigation.css'
const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <nav className={'nav'}>
     
      <NavLink
        className={'link-logo'}
        to='/'
      >
        <img src="/logo.svg" alt="" />
      </NavLink>
     
      <ul className={!isOpen?'navbar-nav':'navbar-nav navbar-none'}>
     
      <NavLink
        className={'link'}
        to='/'
      >
        Home
      </NavLink>
      
        <NavLink
          className={'link'}
          to='/new'
        >
          New
        </NavLink>
        <NavLink
          className={'link'}
          to='/popular'
        >
          Popular
        </NavLink>
        <NavLink
          className={'link'}
          to='/trending'
        >
          Trending
        </NavLink>
        <NavLink
          className={'link'}
          to='/categories'
        >
          Categories
        </NavLink>
      </ul>
      <div className="hamburger">
      <Hamburger
      size={30}
      duration={0.3}
      distance="md"
      color={isOpen?"#f15e50":'#00001a'}
      easing="ease-in"
      rounded 
      label="Show menu"
      onToggle={toggled => {
        setOpen(true)
        if (toggled) {
           // open a menu
        } else {
          setOpen(false)
        }
      }}
      />
      </div>
    </nav>
  )
}

export default Navigation
