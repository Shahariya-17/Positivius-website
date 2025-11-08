import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Service from '../Services/Service';
import CaseStudies from '../CaseStudies/CaseStudies';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Company></Company>
           <Service></Service>
           <CaseStudies></CaseStudies>
        </div>
    );
};

export default Home;