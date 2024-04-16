import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function Header(){
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt")
    window.location.href = "/"
  }

  const [jwt, setJwt] = useState(localStorage.getItem("jwt") !== null ? true : false);
  useEffect(() => { 
    localStorage.getItem("jwt") !== null ? setJwt(true) : setJwt(false);
  }, []);

  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to = "/" className="navbar-brand">LA VIDA</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to = "/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to = "/recipes" className="nav-link active">Recipes</Link>
              </li>
              <li className="nav-item">
                <Link to = "/create-recipe" className="nav-link active">Create Recipe</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
                </a>
                <ul className="dropdown-menu">
                  {jwt === true ? (
                    <div>
                      <li><Link to = "/account-information" className="dropdown-item">Account Settings (Coming Soon)</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><button onClick={handleClick} className="dropdown-item">Logout</button></li>
                    </div>  
                  ): (
                    <div>
                      <li><Link to = "/login" className="dropdown-item">Login</Link></li>
                      <li><Link to = "/signup" className="dropdown-item">Sign Up</Link></li>
                    </div>
                  )}    
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}