import React from "react"
import { Link } from "react-router-dom";
import './Navbar.css'
// import logo from '..../public/ivaar-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark color-navb">
            <div className="Navbar">
                {/* {{!-- < a className="navbar-brand" href="/">Wonder Places</> --}} */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        {/* <li className="dropdown">
                            <Link to="" className="Navbar__link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                                <span class="nav-label">Alertas</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/all-allerts">Ver</Link></li>
                                <li><Link to="/new-allert">Nueva</Link></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/new-allert" className="Navbar__link">
                                <h5> Nueva</h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adopt" className="Navbar__link">
                                <h5> Adopta</h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/foster-homes" className="Navbar__link">
                                <h5> Acoge</h5>
                            </Link>
                        </li>
                        <a className="nav-link" href="/"> <img src="" width="300" height="50" alt="" /></a>
                        <li className="nav-item">
                            <Link to="/register" className="Navbar__link">
                                <h5> Registrate</h5>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="Navbar__link">
                                <h5> Login</h5>
                            </Link>
                        </li>

                        <a className="btn btn-outline-success" type="submit" href="/login">Login</a>


                    </ul>
                </div>
            </div>
        </nav >
    )
}