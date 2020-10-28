import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AllEvents.css';

const AllEvents = () => {
    const [events, setEvent] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/getEvents')
            .then(res => res.json())
            .then(data => {
                setEvent(data)
            })
    }, [])

    const history = useHistory()
    const goForRegistration = name => {
        history.push(`/register/${name}`)
    }

    // Note: I'm using images from my google photos. That's why it's not showing on other account...

    return (
        <>
            <div className="container">
                <div className="d-flex row">
                    {
                        events.map(event => <div className="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3">
                            <div onClick={() => goForRegistration(event.name)} className='box'>
                                <h5 className='text-center eventName'>{event.name}</h5>
                                <img id='eventImage' src={event.image} alt="" />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default AllEvents;