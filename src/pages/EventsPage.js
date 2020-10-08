import React from 'react';
import Events from '../components/Events/Events';
import Header from '../components/Header/Header';

const EventsPage = () => {
    return (
        <>
        <Header></Header>
        <div className="container">
            <Events></Events>
        </div>
            
        </>
    );
};

export default EventsPage;