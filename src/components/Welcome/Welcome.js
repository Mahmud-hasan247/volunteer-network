import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <>
        <h3 className='text-center'>I GROW BY HELPING PEOPLE IN NEED</h3>
            <form id='search' className="form-inline">
                <input className="form-control search" placeholder="Search"></input>
                <button className="btn btn-outline-primary my-4 my-sm-0" type="submit">Search</button>
            </form>
        </>
    );
};

export default Welcome;