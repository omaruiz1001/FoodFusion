import { LoginButton } from "./LoginButton"
import { LogoutButton } from "./LogoutButton"
import { Profile } from "./Profile"
import pe from "../assets/pe.png"

export const Navbar = ( {isMovil,  isAuthenticated}) => {
  return (
    <nav className="navbar navbar-light  bg-body-tertiary fixed-top">
    <div className="container">
      <a className="navbar-brand theme-color" href="#">FoodFusion🥞</a>
  
      <div className="navbar-sections d-flex justify-content-center">
      <a className="navbar-brand text-muted" href="#">Beneficios</a>
      <a className="navbar-brand text-muted" href="#">Quiero ser tu aliado</a>
      <a className="navbar-brand text-muted" href="#">Preguntas frecuentes</a>
  
      <div className="d-flex justify-content-center align-items-center gap-3">
          <div>
            <img className="peru" src={pe}/>
          </div>
            <select name="" id="" class="form-select">
              <option value="Peru">Peru</option>
              <option value="Peru">Argentina</option>
              <option value="Peru">Brazil</option>
              <option value="Peru">Chile</option>
              <option value="Peru">Colombia</option>
              <option value="Peru">Bolivia</option>
              <option value="Peru">Ecuador</option>
            </select>
          </div>
          <div className="d-flex gap-3">
            <Profile/>
            {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
            <button className="btn btn-success">Crea tu cuenta</button>
        </div>
      </div>
  
      <button className={`navbar-toggler ${isMovil ? "" : "menubars"}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end text-bg-tertiary" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title theme-color" id="offcanvasDarkNavbarLabel">FoodFusion🥞</h5>
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Beneficios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quiero ser tu aliado</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Preguntas frecuentes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
  )
}
