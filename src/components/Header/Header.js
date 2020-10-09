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
                <Link to='/'><img id="headerLogo" src={logo} alt=""/></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0 ">
                            <Link to="/home"><p style={{color: 'black'}} className="headerItems">Home</p></Link>
                            <p className="headerItems">Donation</p>
                            <Link to={`/myEvents/${loggedInUser.email}`}> <p className="headerItems"  style={{color: 'black'}}>My Events</p> </Link>
                            <p className="headerItems">Blog</p>
                            <h6 className="headerItems">{loggedInUser.name}</h6>
                            <Link to="/register"><button className="btn btn-primary" >Register</button></Link>    
                            <Link to="/adminPanel">
                            <button className="btn btn-dark">Admin</button>
                            </Link>
                    </form>
                </div>
            </nav>
        </div>
            
        </>
    );
};

export default Header;