import '../styles/navbar.css';
import { NavLink } from "react-router-dom";
export default function NavBar(){
    return(
        <nav className="navbar navbar-expand navbar-dark bg-primary" aria-label="Second navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">HaiLe-React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Users">List User</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}