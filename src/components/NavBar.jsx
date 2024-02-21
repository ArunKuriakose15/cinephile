import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-dark ">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">cinephile</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">New</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    All
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Biography</Link></li>
                                    <li><Link className="dropdown-item" to="#">Crime</Link></li>
                                    <li><Link className="dropdown-item" to="#">Drama</Link></li>
                                    <li><Link className="dropdown-item" to="#">Romance</Link></li>
                                    <li><Link className="dropdown-item" to="#">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="#">Thriller</Link></li>
                                    <li><Link className="dropdown-item" to="#">Comedy</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search movies here.."
                                aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="#">Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar