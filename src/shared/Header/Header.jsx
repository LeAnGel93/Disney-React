import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Pagination from '../components/Pagination/Pagination'

function Header() {
  return (<>
    <div className='header'>
        <Link className to='/'>Home</Link>
        <Link to='/disney'>Disney</Link>
    </div>
    
    </> )
}

export default Header