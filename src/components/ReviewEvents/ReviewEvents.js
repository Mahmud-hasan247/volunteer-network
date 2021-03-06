import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import trash from '../../../src/images/trash-2 9.png';
import './ReviewEvents.css';


const ReviewEvents = () => {

    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        fetch('https://polar-sierra-60369.herokuapp.com/volunteers')
            .then(response => response.json())
            .then(data => setVolunteers(data))
    }, [])

    const history = useHistory()

    const cancelEvent = id => {
        fetch(`https://polar-sierra-60369.herokuapp.com/cancel/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(res => {
                alert('You have removed the person successfully!')
            })
    }

    return (
        <>
            <div className="area">
                <div className="main-box">
                    <div className="headings">
                        <div className="row">
                            <div className=" hdn-item col-2"><h5>Name</h5></div>
                            <div className=" hdn-item  col-3"><h5>Email</h5></div>
                            <div className=" hdn-item  col-2"><h5>Date</h5></div>
                            <div className=" hdn-item  col-2"><h5>Event</h5></div>
                            <div className=" hdn-item  col-1"><h5>Action</h5></div>
                        </div>
                    </div>
                    {
                        volunteers.map(info => <div className="information">
                            <div className="row">
                                <div className="info-item col-2"><h6>{info.about.name}</h6></div>
                                <div className="info-item col-3"><p>{info.about.email}</p></div>
                                <div className="info-item col-2"><p>{info.about.date}</p></div>
                                <div className="info-item col-2"><p>{info.about.event}</p></div>
                                <div className="info-item col-1"><img onClick={() => cancelEvent(info._id)} id="trash" src={trash} alt="" /></div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ReviewEvents;