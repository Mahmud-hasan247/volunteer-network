import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo.png';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    
    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <img id="headerLogo" src={logo} alt=""/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0 ">
                            <p className="headerItems">Home</p>
                            <p className="headerItems">Donation</p>
                            <p className="headerItems">Events</p>
                            <p className="headerItems">Blog</p>
                            <h6 className="headerItems">{loggedInUser.name}</h6>
                            <Link to="/register"><button className="btn btn-primary" >Register</button></Link>    
                            <button className="btn btn-dark">Admin</button>
                    </form>
                </div>
            </nav>
        </div>
            
        </>
    );
};

export default Header;