import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Company></Company>
           <Service></Service>
        </div>
    );
};

export default Home;