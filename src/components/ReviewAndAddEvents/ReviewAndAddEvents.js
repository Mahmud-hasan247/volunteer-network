import React, { useState } from 'react';
import AddEvent from '../AddEvent/AddEvent';
import ReviewEvents from '../ReviewEvents/ReviewEvents';
import logo from '../../../src/images/logo.png';
import people from '../../../src/images/users-alt 1.png';
import plus from '../../../src/images/plus 1.png';
import './ReviewAndAddEvents.css';
import { Link } from 'react-router-dom';

const ReviewAndAddEvents = () => {
    const [toggle, setToggle] = useState('volunteers')

    const addEvent = () => {
        setToggle('addEvent')
    }
    const volunteers = () => {
        setToggle('volunteers')
    }

    return (
        <>
            <div className="d-flex">
            <div className="">
                <Link to="/"><img id="admin-logo" src={logo} alt="" /></Link>
                <div id="toggle">
                    <div onClick={volunteers} className="toggle d-flex">
                        <img className='icons' src={people} alt="" />
                        <h6>Registered volunteers list</h6>
                    </div>
                    <div onClick={addEvent} className="toggle d-flex">
                        <img className='icons' src={plus} alt="" />
                        <h6>add event</h6>
                    </div>
                </div>
            </div>
            <div className="">
                {toggle === 'volunteers' && <p className='text-left headline'>Registered volunteers</p>}
                {toggle === 'addEvent' && <p className='text-left headline'>Add an event</p>}
            <div className="toggle-between">
            {toggle === 'addEvent' && <AddEvent></AddEvent>}
            {toggle === 'volunteers' && <ReviewEvents></ReviewEvents>}
            </div>
            </div>
            </div>
        </>
    );
};

export default ReviewAndAddEvents;