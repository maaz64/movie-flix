import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./navbar.css"

function NavBar() {
    return (
        <>
            <div className="navbar">
                <Link to="/" style={{ textDecoration: 'none' }} >
                    <div className="title">
                        <h1>Movie Flix</h1>
                    </div>
                </Link>

                <div className="rightNav">


                    <Link to="/" style={{ textDecoration: 'none' }} >
                        <div className="home-btn" >
                            <img src="https://cdn-icons-png.flaticon.com/128/9073/9073032.png" alt="home-btn" />
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link to="/add-movie" style={{ textDecoration: 'none' }} >
                        <div className="add-btn" >
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="add-btn" />
                            <span>Add Movies</span>
                        </div>
                    </Link>
                </div>

            </div>
            <Outlet />


        </>
    )
}

export default NavBar






