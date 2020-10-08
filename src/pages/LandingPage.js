import React from 'react';
import AllEvents from '../components/AllEvents/AllEvents';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';

const LandingPage = () => {
    return (
        <>
            <Header/>
            <Welcome/>
            <AllEvents/>
        </>
    );
};

export default LandingPage;