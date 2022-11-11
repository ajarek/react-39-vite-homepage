import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
  
  return (
    <nav className={'nav'}>
      <NavLink
        className={'link'}
        to='/'
      >
        <img src="/logo.svg" alt="" />
      </NavLink>
     
      <div className={'wrapper'}>
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
      </div>
      
    </nav>
  )
}

export default Navigation
