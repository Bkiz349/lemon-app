import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
   return (<nav className="navbar navbar-expand-md bg-light">
      <div className="container">
         <Link to="/" className="navbar-brand">
            LITTLE LEMON
         </Link>
         <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbar-menu" >
               <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="navbar-nav ms-auto">
               <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
               </li>
               <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
               </li>
               <li className="nav-item">
                  <Link to="/reservations" className="nav-link">Reservations</Link>
               </li>
               <li className="nav-item">
                  <Link to="/order" className="nav-link">Order Online</Link>
               </li>
               <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
               </li>

            </ul>
         </div>
      </div>
   </nav>);
}
 
export default Nav;