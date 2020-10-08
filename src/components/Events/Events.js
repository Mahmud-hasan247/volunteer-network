import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import volunteer from '../../../src/images/extraVolunteer.png';
import { userContext } from '../../App';
import './Events.css';

const Events = () => {

    const [events, setEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(() => {
        fetch('http://localhost:4000/myEvents/' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem("authToken")}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setEvents(data)
            })
    }, [])

    const history = useHistory();
    const cancelEvent = id => {
        fetch('http://localhost:4000/cancel/' + id, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                history.push('cancel/'+ id)
                console.log(data);
            })
    }

    return (
        <>
            <h2 className="text-center">Your Registered Events </h2>
            <h5 className="text-center">You have registered for {events.length} events</h5>
            <div className="container d-flex row ">
                {
                    events.map(myEvents => <> 
                        <div className="  col-md-5  d-flex events">
                            <img id='event-image' src={volunteer} alt="" />
                            <div className="info">
                                <h6>{myEvents.about.event}</h6>
                                <p>{myEvents.about.date}</p>
                            </div>
                            <button onClick={cancelEvent(myEvents._id)} id="cancel-button" className="btn btn-primary">cancel</button>
                        </div></>
                    )
                }
            </div>


        </>
    );
};

export default Events;