import React from 'react'
import logo from '../bloglogo.png';
const Header = () => {
  return (
    <>
    <nav class="cus-navbar navbar navbar-expand-lg navbar-light">
  <div class="container-fluid justify-content-start">
    <a class="navbar-brand" href="#"><img width="30px" src={logo} /></a>
    
    <div>      
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />       
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header