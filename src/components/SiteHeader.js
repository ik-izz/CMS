import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.png'
import {useCookies} from 'react-cookie';
import './siteheader.css'

export default function SiteHeader() {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const handleRemoveCookie = () => {
    console.log('cookie func called');
    console.log(cookies);
    removeCookie('token',  { path: '/' });
    console.log(cookies);

  }
  return (
    <nav className="top-header navbar-dark bg-dark">
     
     <div class="container-fluid">
      <Link class="navbar-brand" to='/homepage'>
      <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />
      Vngle
    </Link>
    
    </div>
    
    
      <div className="menu-links">
      <Link to="/homepage" className="btn-1">Stories</Link>
      <Link to='/' className="">Login</Link>
      <Link to='/' className="" onClick={handleRemoveCookie}>Logout</Link>
      
    
    </div>  
    </nav>
  )
}