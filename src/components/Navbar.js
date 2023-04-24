import React from 'react'
import {Link} from "react-router-dom"
import Login from './Login'
import Signup from './Signup'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold">
<div className="container-fluid py-2">

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0  links">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
            <li className="nav-item">
      <Link className="nav-link active" to="/about">About</Link>
    </li>
            <li className="nav-item">
      <Link className="nav-link active" to="/contact">Contact</Link>
    </li>
            <li className="nav-item">
      <Link className="nav-link active" to="/products">Products</Link>
    </li>
 
 
 
  </ul>
        <Link className="navbar-brand mx-auto fw-bold site" to="/">NINJA's</Link>

       <Login/>
       <Signup/>
{/* <Log
<Signup/>
<CartBtn/>
  */}
       
</div>
</div>
</nav>

    </>
  )
}

export default Navbar